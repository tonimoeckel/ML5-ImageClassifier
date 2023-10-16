import React from 'react';
import './App.css';
import {ImageClassifierProvider} from "./provider/MLProvider";
import {ArcElement, Chart} from 'chart.js'
import {AppLayout} from "./components/Layout";
import {Router} from "./routes";

Chart.register(ArcElement);



function App() {

  return (
      <ImageClassifierProvider>
          <AppLayout>
              <Router/>
          </AppLayout>
      </ImageClassifierProvider>
  );
}

export default App;
