import {List} from "antd";
import {useState} from "react";
import * as tf from '@tensorflow/tfjs';

export const LoadFFNNModel: React.FC<{
    onPredictedData: (predicatedData: any) => void }> = props => {

    const [list, setList] = useState<any[]>([{
        title: 'Best Fit',
        description: 'Epochs=500, Adam, N=1000, 4 Layers',
        url: '/models/model_2023-12-09_23-18-49.json'//best-fit.json'
    },{
        title: 'Overfitting',
        description: 'Epochs=1000, Adam, N=1000, 5 Layers',
        url: '/models/overfitting.json'
    },
        {
            title: 'Underfitting',
            description: 'Epochs=50, Adam, 2 Layers',
            url: '/models/underfitting.json'
        }]);

    return (
        <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            bordered
            size="small"
            dataSource={list}
            renderItem={(item) => (
                <List.Item style={{cursor: 'pointer'}} onClick={async () => {
                    // generate xs from -1 to 1
                    const xs = tf.tensor(Array.from({length: 200}, (v, i) => i / 100 - 1));
                    const model = await tf.loadLayersModel(item.url);
                    const predictedYs = model.predict(xs) as tf.Tensor;
                    props.onPredictedData([Array.from(xs.dataSync()), Array.from(predictedYs.dataSync())])

                }}>
                    <List.Item.Meta
                        title={item.title}
                    />
                        {item.description}
                </List.Item>
            )}
        />
    );
};