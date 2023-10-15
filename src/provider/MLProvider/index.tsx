// ml5Context.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
// @ts-ignore
import * as ml5 from 'ml5';

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

    if (!classifier) return (<div>Loading...</div>);

    return (
        <ImageClassifierContext.Provider value={{ classifier, isReady: classifier !== null }}>
            {props.children}
        </ImageClassifierContext.Provider>
    );
};

export const useImageClassifier = () => {
    return useContext(ImageClassifierContext);
};
