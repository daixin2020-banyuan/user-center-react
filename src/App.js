import React from 'react';
import { BrowserRouter as Router  } from 'react-router-dom';

/* components */
import Sider from './Component/Sider/Sider';
import Center from './Component/Center/Center';

import './App.css';

function App () {
   return (
      <Router>
         <div className="App">
            <Sider></Sider>
            <Center ></Center>
         </div>
      </Router>
   );
}

export default App;
