import React from 'react';
import './App.css';
import {ImageClassifierProvider} from "./provider/MLProvider";
import {ArcElement, BarElement, CategoryScale, Chart, LinearScale} from 'chart.js'
import {AppLayout} from "./components/Layout";
import {Router} from "./routes";
import {HashRouter} from "react-router-dom";

Chart.register(ArcElement);
Chart.register(BarElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);


function App() {

  return (
      <ImageClassifierProvider>

              <HashRouter>
                  <Router/>
              </HashRouter>

      </ImageClassifierProvider>
  );
}

export default App;
