import React, {useCallback, useState} from "react";
import * as tf from '@tensorflow/tfjs';
import {Button, Form, InputNumber, Select} from "antd";

interface ModelLayer {
    units: number;
    activation: string;
    inputShape?: number[];
}

interface ModelOptions {
    optimizer?: string;
    learningRate?: number;
}

function createTimestampedFilename(prefix: string) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Monate beginnen bei 0
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');

    return `${prefix}_${year}-${month}-${day}_${hour}-${minute}-${second}`;
}


function createModel({optimizer, learningRate}: ModelOptions) {
    const model = tf.sequential();
    model.add(tf.layers.dense({units: 50, activation: 'relu', inputShape: [1]}));
    model.add(tf.layers.dense({units: 50, activation: 'relu'}));
    model.add(tf.layers.dense({units: 1 }));

    let trainOptimizer: any = optimizer;
    // @ts-ignore
    const checkOptmizer = tf.train[optimizer || 'sgd'];
    if (checkOptmizer && learningRate){
        trainOptimizer = checkOptmizer(learningRate);
    }


    const options = {
        loss: 'meanSquaredError',
        optimizer: trainOptimizer
    }
    model.compile(options);
    return model;
}

type FieldType = {
    epochs?: number;
    optimizer?: string;
    learningRate?: number;
};


export const FFNNModelForm: React.FC<{
    trainingData: [number[], number[]],
    onPredictedData: (predicatedData: any) => void }> = props => {

    const [form] = Form.useForm<FieldType>();
    const [processing, setProcessing] = useState<boolean>(false);
    const [model, setModel] = useState<any>(null);


    const onTrain = useCallback(() => {
        setModel(null);
        const model = createModel({
            optimizer: form.getFieldValue('optimizer'),
            learningRate: form.getFieldValue('learningRate')
        })
        if (!model) return;
        const xs = tf.tensor(props.trainingData[0]);
        const ys = tf.tensor(props.trainingData[1]);
        setProcessing(true);
        console.log('Start training');
        model.fit(xs, ys, {
            epochs: form.getFieldValue('epochs'),
        }).then(() => {
            console.log('Model trained');

            setModel(model);

            const predictedXs = tf.tensor(Array.from({length: 200}, (v, i) => i / 100 - 1));
            const predictedYs = model.predict(predictedXs) as tf.Tensor;
            props.onPredictedData([Array.from(predictedXs.dataSync()), Array.from(predictedYs.dataSync())])
            setProcessing(false);


        });
    },[props.trainingData, props.onPredictedData]);

    return (
        <div>
            <Form
                form={form}
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 14 }}
                layout={'horizontal'}
                initialValues={{
                    epochs: 500,
                    optimizer: 'adam',
                    learningRate: 0.1
                }}
                onFinish={onTrain}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Epochs"
                    name="epochs"
                    rules={[{ required: true, message: 'Please input epochs' }]}
                >
                    <InputNumber style={{width: "100%"}} min={50} step={50} max={5000}/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Learning Rate"
                    name="learningRate"
                    rules={[{ required: true, message: 'Please input learning rate' }]}
                >
                    <InputNumber style={{width: "100%"}} step={0.05} min={0} max={1}/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Optimizer"
                    name="optimizer"
                    rules={[{ required: true, message: 'Please input optimizer' }]}
                >
                    <Select>
                        <Select.Option value="adam">Adam</Select.Option>
                        <Select.Option value="adagrad">Adagrad</Select.Option>
                        <Select.Option value="adadelta">Adadelta</Select.Option>
                        <Select.Option value="adamax">Adamax</Select.Option>
                        <Select.Option value="rmsprop">RMSProp</Select.Option>
                        <Select.Option value="sgd">SGD</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 10, span: 14 }}>
                    <Button loading={processing} type="primary" htmlType="submit">
                        Create
                    </Button>
                    {model && <Button style={{marginLeft: 10}} onClick={() => {
                        const today = new Date();
                        const dd = String(today.getDate()).padStart(2, '0');
                        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                        const yyyy = today.getFullYear();
                        model.save(`downloads://${createTimestampedFilename('model')}`);
                    }}>Save</Button>}

                </Form.Item>
            </Form>
        </div>
    );
};