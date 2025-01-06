import './App.css';
import Aboutus from './componants/Aboutus';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import  { useState } from 'react';
import  Alert  from './componants/Alert';
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light")
  const [modelabel, setmodeLabel] = useState("Enabled Dark Mode")
  const [color, setColor] = useState("black")
  const [ alert, setAlert ] = useState({})

  let togglemode = () =>{
    if(mode === "light"){
      setMode("dark")
      setmodeLabel("Enable Dark Mode")
      setColor("white")
      showAlert("Dark mode successfully enabled", "success")
    }
    else{
      setMode("light")
      setmodeLabel("Enable Light Mode")
      setColor("black")
      showAlert("Light mode successfully enabled", "success")
    } 
  }

  let showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(removeAlert, 2000)
  }
  const removeAlert = () =>{
    console.log("HHHe")
    setAlert(null)
  }

  return (
    <>
      <Navbar about = "about" title = "Foss"  mode={mode} togglemode = {togglemode} modelabel = {modelabel} color={color} showAlert={showAlert} contact = "Contact Us"/>
      <Alert alert = {alert} />
      <BrowserRouter>
      <Routes>
      <Route path="about" element={<Aboutus/>}></Route>                                                                                                                                                                                                                                                                     
      <Route path="contact" element={<TextForm mode={mode} color={color}/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;