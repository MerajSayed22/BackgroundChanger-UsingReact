import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2"> 
      <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white rounded-3xl px-4 py-2 font-bold">
        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"red"}}
        onClick={()=> setColor("red")}
        >Red</button>
        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Green"}}
        onClick={()=> setColor("green")}
        >Green</button>
        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Purple"}}
        onClick={()=> setColor("Purple")}
        >Purple</button>
        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Violet"}}
        onClick={()=> setColor("Violet")}
        >Violet</button>
        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Black"}}
        onClick={()=> setColor("Black")}
        >Black</button>
        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Blue"}}
        onClick={()=> setColor("Blue")}
        >Blue</button>
        <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"Grey"}}
        onClick={()=> setColor("Grey")}
        >Grey</button>
      </div>

      </div>

      </div>
    </>
  )
}

export default App
