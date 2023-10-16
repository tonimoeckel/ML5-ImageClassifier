import "./index.css";
import {useImageClassifier} from "../../provider/MLProvider";
import {useEffect, useRef, useState} from "react";
import {Pie} from "react-chartjs-2";

interface ClassificationResult {label: string, confidence: number}

const loadImage = (src: string) =>
    new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    })
;

export const MLImageCard: React.FC<{
    src: string;
}> = props => {

    const [resultIndex, setResultIndex] = useState(0)
    const { classifier } = useImageClassifier();
    const imageRef = useRef<any>();
    const [classifications, setClassifications] = useState<ClassificationResult[]>([])

    const doIt = async () => {
        try {
            const image = await loadImage(props.src);
            classifier.classify(image, (err: any, classifications: ClassificationResult[]) => {

                if (!err) {
                    setResultIndex(0);
                    setClassifications(classifications);
                }

            })
        }catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {

        doIt();


    }, [imageRef, props.src]);

    const classification = classifications[resultIndex];

    return (
        <div style={{display: 'flex', position: 'relative', flexDirection: 'row', alignItems: 'center', gap: 16}}>
            <div className={"image-card"}>
                <img ref={imageRef} className={"image-card__img"} src={props.src} />
                <span className="image-card__footer">
                {classification ? <span>{classification.label}</span> : null}
                    {classification ? <span>{classification.confidence}</span> : null}
                    {classification ? <span onClick={() => {
                        if ((resultIndex + 1) < classifications.length) {
                            setResultIndex(resultIndex + 1)
                        }else {
                            setResultIndex(0)
                        }
                    }} className="image-card__action">
    <svg viewBox="0 0 448 512">
      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
    </svg>
  </span> : null}
          </span>
            </div>

            {classification ?
                <div style={{width: 50, position: 'absolute', right: 20, top: 20}}>
                    <Pie
                        data={{
                            datasets: [{
                                backgroundColor: [
                                    'rgb(35,222,8)',
                                    'rgb(234,36,36)',
                                ],
                                label: 'My First Dataset',
                                data: [classification.confidence, 1-classification.confidence],
                            }]
                        }}
                    />
                </div>
                : null}

        </div>

    );
};