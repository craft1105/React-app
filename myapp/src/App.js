
import './App.css';
import Textform from './components/Textform';
import { Navbar } from './components/Navbar';
import React,{useState} from 'react'
import { Alert } from './components/Alert';
// import About from './components/About';



function App() {
    const [Mode, setMode] = useState('light')
   const [alert, setAlert] = useState(null)


   const showAlert=(msg,type)=>{
    setAlert(   {
        msg:msg,
        type:type
    } )
    setTimeout(() => {
        setAlert(null)
    }, 1500);
    
   }
    const togglemode =()=>{
        if(Mode==='light'){
         setMode('dark')
         document.body.style.backgroundColor='#042743'
         showAlert("Dark Mode Has been Activated","success");
    }
        else{
            setMode('light')
            document.body.style.backgroundColor='white'
            showAlert("Light Mode Has been Activated","success");
    }
    }
 return (
 <>
<Navbar title="TextUtiles" Mode={Mode} togglemode={togglemode}/>
<div className="container">
<Alert alert={alert}/>
<Textform heading="Enter the text below to analyzie" Mode={Mode}/>
{/* <About/> */}

</div>

 </>
 );
} 

export default App;
