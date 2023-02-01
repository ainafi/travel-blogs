// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import Home from './pages/Home';
import './styles/index.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './Data'

function App() {
    const Cards=Data.map(item =>{
      return(
        <Card 
        key={item.id}
        item={item}
        
        
        />
      )
     
    })
  return (
      <div>
            <Home/>
            <Hero/>
          <section className="card--section">
            {Cards}
          </section>
            

      </div>
  )
}

export default App;
