import React from 'react';
import './App.css';
import {MLImageCard} from "./components/MLImageCard";
import {ImageClassifierProvider} from "./provider/MLProvider";
import {Chart, ArcElement} from 'chart.js'
import {MLUploadCard} from "./components/MLUploadCard";

import panda from "./assets/IMG_2634.jpg";
import tiki from "./assets/DSC00358.jpg"
import bird from "./assets/IMG_0004.jpg";
import schneeleo from "./assets/IMG_2681.jpg";
import arabica from "./assets/216602-00-GPIE.jpg"
import faultier from "./assets/IMG_2644.jpg"
import tiki2 from "./assets/IMG001.jpg"
import pizza from "./assets/Pizza_salami_slices.jpg"

Chart.register(ArcElement);



function App() {


  return (
    <div className="App">
        <ImageClassifierProvider>
            <div style={{display: 'flex', gap: 16, flexDirection: 'column' }}>
                <h1 style={{textAlign: 'center'}}>Image Classifier</h1>
                <h2 style={{textAlign: 'center'}}>Good</h2>
                <div style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center' , display: 'flex', flexWrap: "wrap", gap: 16}}>
                    <MLImageCard key={"panda"} src={panda} />
                    <MLImageCard key={"tiki"} src={tiki} />


                </div>

                <h2 style={{textAlign: 'center'}}>Mix</h2>
                <div style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center' , display: 'flex', flexWrap: "wrap", gap: 16}}>
                    <MLImageCard key={"bird"} src={bird} />
                    <MLImageCard key={"schneeleopard"} src={schneeleo} />
                    <MLImageCard key={"arabica"} src={arabica} />
                </div>


                <h2 style={{textAlign: 'center'}}>Bad</h2>
                <div style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignContent: 'center' , display: 'flex', flexWrap: "wrap", gap: 16}}>
                    <MLImageCard key={"faultier"} src={faultier} />
                    <MLImageCard key={"tiki2"} src={tiki2} />
                    <MLImageCard key={"pizza"} src={pizza} />
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
