import { useState } from 'react'
import './App.css'

function App() {
  const[bgColor, setbgColor] =useState("white)")
  const bgChange=(color)=>{
    setbgColor(color)
  }

  return (
    <>
      <div className='bg' style={{ backgroundColor: bgColor }}>
      <button className='btn' onClick={()=>bgChange("red")} style={{backgroundColor: "red", color: "white"}}>Red</button>
      <button className='btn' onClick={()=>bgChange("green")} style={{backgroundColor: "green", color: "white"}}>Green</button>
      <button className='btn' onClick={()=>bgChange("yellow")} style={{backgroundColor: "yellow", color: "white"}}>Yellow</button>
      </div>
    </>
  )
}

export default App