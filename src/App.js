import './App.css';
import EuseEffect from './components/EuseEffect';
import EuseReducer from './components/EuseReducer';
import EuseState from './components/EuseState';
import EuseRef from './components/EuseRef';
import EuseLayoutEffect from './components/EuseLayoutEffect'
import Home from './components/Home';
import EuseImperativeHangdle from './components/EuseImperativeHandle'

import {Routes,Route} from "react-router-dom";
import EuseContext from './components/EuseContext';
import EuseMemo from './components/EuseMemo';
import EuseCallback from './components/EuseCallback';

function App() {
  
  return (
    <div className="App">
      {/* <Home/> */}
      

    {/* <EuseImperativeHangdle/> */}
    {/* <EuseContext/> */}
    {/* <EuseMemo/> */}
    <EuseCallback/>

    </div>
  );
}

export default App;
