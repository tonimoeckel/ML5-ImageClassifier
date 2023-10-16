import React from 'react';
import {Card, Skeleton} from 'antd';
import {useClassifyImage} from "../../provider/MLProvider";
import {Pie} from "react-chartjs-2";

export const ML5ImageCard: React.FC<{ image: any }> = props => {

    const {classificationResult, loading} = useClassifyImage(props.image);

    const result = classificationResult && classificationResult.length > 0 ? classificationResult[0] : null;

    return (
        <Card
            hoverable
            style={{width: 240}}
            cover={<Skeleton loading={loading}>
                <img alt="example" src={props.image} />
            </Skeleton>}
        >
            <Card.Meta title={result?.label} description={result?.confidence ? Math.floor(result?.confidence * 100)/100: null} />

            {result ?
                <div style={{width: 30, position: 'absolute', right: 15, bottom: 15}}>
                    <Pie
                        data={{

                            datasets: [{
                                borderWidth: 0,
                                backgroundColor: [
                                    'rgb(35,222,8)',
                                    'rgb(234,36,36)',
                                ],
                                label: 'My First Dataset',
                                data: [result.confidence, 1-result.confidence],
                            }]
                        }}
                    />
                </div>
                : null}
        </Card>
    );
};