import React from 'react';
import './App.css';
import {MLImageCard} from "./components/MLImageCard";
import {ImageClassifierProvider} from "./provider/MLProvider";
import {Chart, ArcElement} from 'chart.js'
import {MLUploadCard} from "./components/MLUploadCard";
Chart.register(ArcElement);

function App() {


  return (
    <div className="App">
        <ImageClassifierProvider>
            <div style={{display: 'flex', gap: 16, flexDirection: 'column' }}>
                <h1 style={{textAlign: 'center'}}>Image Classifier</h1>
                <h2 style={{textAlign: 'center'}}>Good</h2>
                <div style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center' , display: 'flex', flexWrap: "wrap", gap: 16}}>
                    <MLImageCard key={"panda"} src={"/assets/IMG_2634.JPG"} />
                    <MLImageCard key={"tiki"} src={"/assets/DSC00358.jpg"} />


                </div>

                <h2 style={{textAlign: 'center'}}>Mix</h2>
                <div style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center' , display: 'flex', flexWrap: "wrap", gap: 16}}>
                    <MLImageCard key={"bird"} src={"/assets/IMG_0004.JPG"} />
                    <MLImageCard key={"schneeleopard"} src={"/assets/IMG_2681.JPG"} />
                    <MLImageCard key={"arabica"} src={"/assets/216602-00-GPIE.jpg"} />
                </div>


                <h2 style={{textAlign: 'center'}}>Bad</h2>
                <div style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center' , display: 'flex', flexWrap: "wrap", gap: 16}}>
                    <MLImageCard key={"faultier"} src={"/assets/IMG_2644.JPG"} />
                    <MLImageCard key={"tiki2"} src={"/assets/IMG001.jpg"} />
                    <MLImageCard key={"panda"} src={"/assets/Pizza_salami_slices.jpg"} />
                </div>

                <h2 style={{textAlign: 'center'}}>Yours</h2>
                <div style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center' , display: 'flex', flexWrap: "wrap", gap: 16}}>
                    <MLUploadCard key={"4"} />
                </div>
            </div>


        </ImageClassifierProvider>
    </div>
  );
}

export default App;
