import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi]= useState(null);
  const [bmiStatus, setBmiStatus] = useState("");  
  const [errorMessage, setErrorMessage]= useState("")

  const calculateBmi =() =>{
    const isValidHeight=/^\d+$/.test(height);
    const isValidWeight=/^\d+$/.test(weight);
    if(isValidHeight && isValidWeight)
    {
      const heightInMeter= height/100;
      const bmiValue =weight/(heightInMeter*heightInMeter);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue< 18.5){
        setBmiStatus("Under weight");
      }
      else if(bmiValue>= 18.5 && bmiValue <24.9){
        setBmiStatus("Normal weight");
      }
      else if(bmiValue>= 25 && bmiValue <29.9){
        setBmiStatus("Over weight");
    }
      else{
        setBmiStatus("Obese");
      }
      setErrorMessage("");
     } else{
      setBmi(null);
      setBmiStatus(null);
      setErrorMessage("please enter valid numeric values for height and weight!,")
    }
  };
  const clearAll=()=>{
    setBmi(null);
      setBmiStatus(null);
      setHeight("");
      setWeight("");
  }
  return (
    <>
    <div className="bmi-calculator">
      <div className="box"></div>
      <div className="data">
        <h1>BMI CALCULATOR</h1>
       {errorMessage && <p className='error'>{errorMessage}</p>}
        <div className="input-container">
          <label htmlFor="height">Height(cm):</label>
          <input type="text" value={height} id='height'onChange={(e)=>setHeight(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="weight">Weight(kg):</label>
          <input type="text" value={weight} id='weight' onChange={(e)=>setWeight(e.target.value)}/>
        </div>
        <button onClick={calculateBmi}>calculate BMI</button>
        <button onClick={clearAll}>clear</button>
        {bmi!=null&&
        (<div className="result">
          <p>your BMI is {bmi}</p>
          <p>status: {bmiStatus}</p>
          </div>)}
      </div>
    </div>
      
    </>
  )
}

export default App