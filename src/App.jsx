import React from 'react'
import Header from './Components/Header/Header'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Section3 from './Components/Section3/Section3'
import Section4 from './Components/Section4/Section4'


const App = () => {
  return (
    <div>
      <Header/>
      <img src="./src/assets/rasm3.png" alt=""  className='img'/>
      <hr className='hr'/>
      <p className="div_p">How the app works</p>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  )
}

export default App