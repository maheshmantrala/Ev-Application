import { useEffect, useState } from 'react'
import './App.css'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

function App() {

    let herodata= [
     { text1:"Dive into",text2:"What you love"},
     { text1:"Indulge",text2:"your passions"},
     { text1:"Give in to",text2:"your passions"}
    ]
    
    const [herocount,setHeroCount]=useState(0)
    const [playstatus,setPlayStatus]=useState(false)

    useEffect(()=>{
      setInterval(() => {
        setHeroCount((count)=>{return count===2?0:count+1})
      }, 5000);
    },[])
  return (
   <div>
    <Background playstatus={playstatus} herocount={herocount}/>
    <Navbar/>
    <Hero 
    setPlayStatus={setPlayStatus} 
    herodata={herodata[herocount]}
    herocount={herocount}
    setHeroCount={setHeroCount}
    playstatus={playstatus}/>
   </div>
  )
}

export default App
