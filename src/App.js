import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/Hero';
import Collection from './components/collection';
import BarLoader from "react-spinners/BarLoader";
import Footer from './components/footer';
import About from './components/about';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])

  return (
    <div className="App">

      {
        loading ? (
        
        <div className='loader'>
          <BarLoader color={"#239B56"} loading={loading} width={100} height={4} />
        </div>
         ) :
        <>
        <Header />
        <Hero />
        <About />
        <Collection />
        <Footer />
        

        </>
      }

      
    </div>
  );
}

export default App;
