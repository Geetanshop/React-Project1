import './App.css';
import About from './Components/About';
import Alerts from './Components/Alerts';
import Navbar from './Components/Navbar';
import Textarea from './Components/Text';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  
  Route,
  
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const btn_dark=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="#383838";
      showalert("successfully enabled dark mode","success");
    }

    else{
      setmode("light");
      document.body.style.backgroundColor="white";
    }

  }
  

  const [alert, setalert] = useState(null)

  const showalert=(text,type)=>{
    setalert({
      text:text,
      type:type
    })

    setTimeout(()=>{
      setalert(null)
    },1000)

  }


  return (
    
    <>
    <Router>
    <Navbar title='Geetansh' mode={mode} btn_dark={btn_dark} ></Navbar>
    <Alerts alert={alert} />

        <Routes>
          <Route path="/about" exact element={<About mode={mode} />}>
          </Route>
          <Route path="/" exact element={<Textarea heading="Write the text" showalert={showalert}  mode={mode} btn_dark={btn_dark}    />
}>
          </Route>
          
        </Routes>
    
    </Router>
    </>
    );
}

export default App;
