import React, {useEffect, useState} from 'react';
import {Flex, InputNumber, Slider} from 'antd';
import * as tf from '@tensorflow/tfjs';

interface TrainingDataGeneratorProps {
    onGenerate: (x: Float32Array, y: Float32Array) => void;
}

export function generateDataForPlot() {
    const data = [];
    const stepSize = 0.01; // Schrittgröße für die x-Werte

    for (let x = -1; x <= 1; x += stepSize) {
        const y = (x + 0.8) * (x - 0.2) * (x - 0.3) * (x - 0.6);
        data.push({ x, y });
    }

    return data;
}


const TrainingDataGenerator: React.FC<TrainingDataGeneratorProps> = ({ onGenerate }) => {
    const [sampleSize, setSampleSize] = useState<number>(100);
    const [noiseVariance, setNoiseVariance] = useState<number>(0.1);



    useEffect(() => {
        const generateData = () => {
            const xs = tf.randomUniform([sampleSize], -1, 1);
            const ys = xs.add(0.8).mul(xs.sub(0.2)).mul(xs.sub(0.3)).mul(xs.sub(0.6));

            const noise = tf.randomNormal([sampleSize], 0, Math.sqrt(noiseVariance) );
            const noisyYs = ys.add(noise);

            onGenerate(xs.dataSync() as Float32Array, noisyYs.dataSync() as Float32Array);
        };
        generateData();
    }, [sampleSize, noiseVariance]);

    return (
        <div>
            <div>
                <label>
                    Sample Size (N): {sampleSize} <label>
                </label>
                    <Flex>
                        <div style={{flexGrow: 1}}>
                            <Slider
                                min={5}
                                max={1000}
                                step={1}
                                marks={{
                                    5: '5',
                                    100: '100',
                                    300: '300',
                                    500: '500',
                                    800: '800',
                                    1000: '1k',
                                }}
                                value={sampleSize}
                                onChange={setSampleSize}
                            />
                        </div>
                        <div>
                            <label style={{marginLeft: 10}}>Varianz: </label>
                            <InputNumber
                                style={{ width: 100, margin: '0 16px' }}
                                min={0}
                                max={0.5}
                                step={0.01}
                                value={noiseVariance}
                                onChange={(v) => {
                                    if (v) {
                                        setNoiseVariance(v);
                                    }else {
                                        setNoiseVariance(0);
                                    }
                                }}
                            />
                        </div>


                    </Flex>

                </label>
            </div>
            <div>

            </div>
        </div>
    );
};

export default TrainingDataGenerator;