// ml5Context.tsx
import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';
// @ts-ignore
import * as ml5 from 'ml5';
import {loadImage} from "../../utils/loadImage";

type ImageClassifierContextType = {
    classifier: ml5.ImageClassifier | null;
    isReady: boolean;
};

const ImageClassifierContext = createContext<ImageClassifierContextType>({
    classifier: null,
    isReady: false,
});

export const ImageClassifierProvider = (props: any) => {
    const [classifier, setClassifier] = useState<ml5.ImageClassifier | null>(null);

    useEffect(() => {
        const setup = async () => {
            const mobileNet = await ml5.imageClassifier('MobileNet');
            setClassifier(mobileNet);
        };

        setup();
    }, []);

    if (!classifier) return (<div className={"full-size-grid"}>Loading...</div>);

    return (
        <ImageClassifierContext.Provider value={{ classifier, isReady: classifier !== null }}>
            {props.children}
        </ImageClassifierContext.Provider>
    );
};

export const useImageClassifier = () => {
    return useContext(ImageClassifierContext);
};

interface ClassificationResult {label: string, confidence: number}

export const useClassifyImage = (imageUrl: string | any) => {

    const [loading, setLoading] = useState<boolean>(true)
    const [classificationResult, setClassificationResult] = useState<ClassificationResult[]|null>(null)

    const {classifier} = useImageClassifier();

    const refetch = useCallback(async () => {

        setLoading(true);
        try {
            let image = imageUrl;
            if (typeof imageUrl === 'string') {
                if (imageUrl.startsWith('data')){
                    image = await new Promise((resolve, reject) => {
                        // create image element from base64 string
                        const img = new Image();
                        img.src = imageUrl;
                        img.onload = () => {

                            setTimeout(() => {
                                resolve(img);
                            }, 500);

                        }

                    })
                }else {
                    image = await loadImage(imageUrl);
                }
            }
            classifier.classify(image, (err: any, classifications: ClassificationResult[]) => {

                if (!err) {
                    setClassificationResult(classifications)
                }else {
                    setClassificationResult(null)
                }
                setLoading(false);

            })
        }catch (e) {
            console.log(e);
            setLoading(false);
        }
    }, [classifier, imageUrl]);

    useEffect(() => {
        refetch();
    }, [imageUrl, refetch]);

    return {classificationResult, refetch, loading}
};
