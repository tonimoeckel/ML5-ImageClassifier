import TrainingDataGenerator, {generateDataForPlot} from "../../components/TrainingDataGenerator";
import React, {useState} from "react";
import {Col, Row, Tabs} from "antd";
import {Scatter} from "react-chartjs-2";
import {FFNNModelForm} from "../../components/FFNNModelForm";
import {LoadFFNNModel} from "../../components/LoadFFNNModel";

const originalData = generateDataForPlot();

export const EA2Route: React.FC<{}> = props => {

    const [trainingData, setTrainingData] = useState<any>(null);
    const [predictedData, setPredictedData] = useState<any>(null);

    const handleDataGenerated = (xValues: Float32Array, yValues: Float32Array) => {
        setTrainingData([Array.from(xValues), Array.from(yValues)]);
    };


    const chartData: any = {
        datasets: [
            {
                type: 'line',
                label: 'Original Function',
                data: originalData,
                pointRadius: 0,
                backgroundColor: 'rgb(79,80,107,0.50)',
                borderColor: 'rgb(79,80,107,0.50)',
            }
        ],
    }

    if (trainingData){
        chartData.datasets.push(
            {
                label: 'Training Data',
                backgroundColor: 'rgb(140,193,245, 0.5)',
                borderColor: 'rgb(140,193,245, 0.5)',
                type: 'scatter',
                showLine: false,
                data: trainingData[0].map((x: number, i:number) => ({x, y: trainingData[1][i]})).sort((a: any, b: any) => a.x - b.x),
            }
        )
    }

    if (predictedData && predictedData.length && predictedData[0].length && predictedData[1].length) {
        chartData.datasets.push({
            label: 'Predicted Data',
            backgroundColor: 'rgb(234,36,36)',
            borderColor: 'rgb(234,36,36)',
            type: 'line',
            pointRadius: 0,

            showLine: true,
            data: predictedData[0].map((x: number, i:number) => ({x, y: predictedData[1][i]})).sort((a: any, b: any) => a.x - b.x)
        })
    }






    return <Row>

        <Col md={16}>
            <h3>Vorschau als Plot</h3>
            <Scatter
                options={{
                    scales: {
                        y: {
                            max: 1,
                            min: -1
                        },
                        x: {
                            min: -1,
                            max: 1
                        }
                    },
                }}
                data={chartData} />

        </Col>
        <Col md={8}>
            <h3>Modelle</h3>
            <Tabs
                defaultActiveKey="load"
                items={[
                    {
                        label: 'Beispiele',
                        key: 'load',
                        children:  <div>
                            <p>Vortrainierte Modelle können hier geladen werden:</p>
                            <LoadFFNNModel onPredictedData={(predicatedData: [number[],number[]]) => {
                            setPredictedData(predicatedData)
                        }}/></div>
                    },
                    {
                        label: 'Neues Modell',
                        key: 'create',
                        children:  <div>
                            <h4>Training Data</h4>
                            <TrainingDataGenerator onGenerate={handleDataGenerated}/>
                            <h4>Model Setup</h4>
                            <FFNNModelForm trainingData={trainingData} onPredictedData={(predicatedData: [number[],number[]]) => {
                            setPredictedData(predicatedData)
                            }}/></div>
                    }
                ]}
            />



        </Col>

    </Row>
};

//