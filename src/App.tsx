import React from 'react';
import './App.css';
import {
    ArcElement,
    BarElement,
    CategoryScale,
    Chart,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    ScatterController,
    Title,
    Tooltip
} from 'chart.js'
import {Router} from "./routes";
import {HashRouter} from "react-router-dom";
import 'chart.js/auto';


Chart.register(ArcElement);
Chart.register(BarElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ScatterController);


function App() {

  return (


              <HashRouter>
                  <Router/>
              </HashRouter>

  );
}

export default App;
