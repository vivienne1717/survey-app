import React from 'react';
import './App.css';

import MainContentHolder from './Pages/MainContentHolder';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Step3 from './Pages/Step3'
import Thankyou from './Pages/Thankyou';
import Detail from './Pages/Detail';

function App() {
  return (
    <div className="App">

        <main>
            <Switch>
                <Route path="/" component={MainContentHolder} exact />
                <Route path="/Step1" component={MainContentHolder} />
                <Route path="/Step3" component={Step3} />
                <Route path="/Acknowledge" component={Thankyou} />
                <Route path="/Detail" component={Detail}/>

            </Switch>
        </main>

    </div>
  );
}

export default App;
