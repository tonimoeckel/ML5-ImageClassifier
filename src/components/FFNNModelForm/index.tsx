import React, {useCallback, useState} from "react";
import * as tf from '@tensorflow/tfjs';
import {Button, Col, Form, Input, InputNumber, message, Select, Space} from "antd";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";

interface ModelLayer {
    units: number;
    activation: string;
    inputShape?: number[];
}

interface ModelOptions {
    optimizer?: string;
    learningRate?: number;
    layers?: ModelLayer[];
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


function createModel({optimizer, learningRate, layers}: ModelOptions) {

    try {
        const model = tf.sequential();

        if (layers && layers.length) {
            layers.forEach((layer, index) => {
                const tmpLayer: any = {
                    ...layer as any,
                    useBias: true,
                };
                if (index === 0 && (!layer.inputShape || !layer.inputShape.length)) {
                    tmpLayer.inputShape = [1];
                }
                model.add(tf.layers.dense(tmpLayer));
            })
        }
        /*
         model.add(tf.layers.dense({units: 50, activation: 'relu', inputShape: [1]}));
        model.add(tf.layers.dense({units: 50, activation: 'relu'}));
        model.add(tf.layers.dense({units: 1 }));
         */


        let trainOptimizer: any = optimizer;
        // @ts-ignore
        const checkOptimizer = tf.train[optimizer || 'sgd'];
        if (checkOptimizer && learningRate){
            trainOptimizer = checkOptimizer(learningRate);
        }


        const options = {
            loss: 'meanSquaredError',
            optimizer: trainOptimizer
        }
        model.compile(options);
        return model;
    }catch (e: any) {
        console.error(e.message)
        return null;
    }

}

type FieldType = {
    epochs?: number;
    optimizer?: string;
    learningRate?: number;
    layers?: ModelLayer[];
};


export const FFNNModelForm: React.FC<{
    trainingData: [number[], number[]],
    onPredictedData: (predicatedData: any) => void }> = props => {

    const [form] = Form.useForm<FieldType>();
    const [processing, setProcessing] = useState<boolean>(false);
    const [model, setModel] = useState<any>(null);


    const onTrain = useCallback(() => {
        setModel(null);

        const layers = [...form.getFieldValue('layers')];
        for (let i = 0; i < layers.length; i++) {
            if (layers[i].inputShape) {
                if (!Array.isArray(layers[i].inputShape)){
                    layers[i].inputShape = [layers[i].inputShape];
                }
            }
        }
        const model = createModel({
            optimizer: form.getFieldValue('optimizer'),
            learningRate: form.getFieldValue('learningRate'),
            layers
        })
        if (!model) {
            message.error('Could not create model');
            return;
        }
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
        })
            .catch((e) => {
                message.error(e.message);
                setProcessing(false);
            })
    },[props.trainingData, props.onPredictedData]);

    return (
        <div>
            <Form
                form={form}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                layout={'horizontal'}
                initialValues={{
                    epochs: 500,
                    optimizer: 'adam',
                    learningRate: 0,
                    layers: [
                        {units: 50, activation: 'relu', inputShape: 1},
                        {units: 50, activation: 'relu'},
                        {units: 1}
                    ]
                }}
                onFinish={onTrain}
                autoComplete="off"
            >

                <Form.Item<FieldType>
                    label="Epochs"
                    name="epochs"
                    rules={[{ required: true, message: 'Please input epochs' }]}
                >
                    <InputNumber  min={50} step={50} max={5000}/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Learning Rate"
                    name="learningRate"
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
                <Form.Item<FieldType>
                    label="Layers"
                    name="layers"
                    rules={[{ required: true, message: 'Please input layers' }]}
                    >
                    <Form.List
                        name="layers">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Space key={key} style={{ display: 'flex'}} align="baseline">
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'units']}
                                        >
                                            <InputNumber style={{width: "100%"}} placeholder={'units'} min={1} step={1} max={100}/>
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'activation']}
                                        >
                                            <Select placeholder={'activation'} style={{width: 100}}>
                                                <Select.Option value="relu">ReLU</Select.Option>
                                                <Select.Option value="elu">ELU</Select.Option>
                                                <Select.Option value="selu">SELU</Select.Option>
                                                <Select.Option value="sigmoid">Sigmoid</Select.Option>
                                                <Select.Option value="softmax">Softmax</Select.Option>
                                                <Select.Option value="softplus">Softplus</Select.Option>
                                                <Select.Option value="softsign">Softsign</Select.Option>
                                                <Select.Option value="tanh">Tanh</Select.Option>
                                                <Select.Option value="linear">Linear</Select.Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'inputShape']}
                                        >
                                            <InputNumber style={{width: "100%"}} placeholder={'inputShape'} min={1} step={1} max={100}/>
                                        </Form.Item>
                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        Ebene hinzufügen
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
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