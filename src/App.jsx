import { Suspense } from 'react'
import './App.css'
import DaisyNavbar from './componets/DaisyNavbar/DaisyNavbar'
import About from './componets/DaisyNavbar/Navbar/About'
import Navbar from './componets/DaisyNavbar/Navbar/Navbar'
import PricingOptions from './componets/PricingOptions/PricingOptions'
import ResultsChart from './componets/ResultsChart/ResultsChart'

const pricingPromise = fetch('../public/pricingData.json').then(res => res.json());

function App() {
 

  return (
    <>
   
   
      <header>
        {/* <About></About> */}
        <Navbar></Navbar>
        <DaisyNavbar></DaisyNavbar>
        {/* <About></About> */}
      </header>
      <main>
        <Suspense fallback ={<span className="loading loading-bars loading-lg"></span>}>
         <PricingOptions pricingPromise ={pricingPromise}></PricingOptions>
        </Suspense>
        <ResultsChart></ResultsChart>
          
      </main>
    
      
      
      
    </>
  )
}

export default App
