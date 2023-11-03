import React from 'react';
import {ClassificationResult} from "../../provider/MLProvider";
import {List} from "antd";
import {Bar} from "react-chartjs-2";

export const ClassificationResultCharts: React.FC<{ classificationResult: ClassificationResult[] }> = props => {

    const colors = [
        '#1e8a24',
        '#b4a207',
        '#e04646'
    ];
    return (
        <div>

            <Bar
                options={{
                    scales: {
                        y: {
                            min: 0,
                            max: 1,
                        }
                    }
                }}
                data={
                {
                    labels: props.classificationResult.map((item, index) => {
                        const names = item.label.split(", ");
                        if (names && names.length) return `${names[0]}`;
                        return item.label;
                    }),
                    datasets: [{
                        label: 'Result',
                        backgroundColor: colors,
                        data: props.classificationResult.map((item) => {
                            return item.confidence
                        }),
                    }]
                }
            }/>

            <List>
                {props.classificationResult.map((item, index) => {
                    return <List.Item>
                        <List.Item.Meta
                            avatar={index+1}
                            title={item.label}
                            description={Math.floor(item.confidence*100)/100}
                        />
                    </List.Item>
                })}

            </List>
        </div>
    );
};