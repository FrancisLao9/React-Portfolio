import React, {useState} from 'react';
import "./App.css";
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
//import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  const [currentTab, setCurrentTab] = useState('about');

  const renderTab = () => {
    if (currentTab === "About") {
      return <About/>;
    }
    if (currentTab === "Contact") {
      return <Contact/>;
    }
    if (currentTab === "Portfolio") {
      return <Portfolio/>;
    }
    // if (currentTab === "Resume") {
    //   return <Resume/>;
    // }
    return <About/>;
  }

  return (
    <div>
      <title>Francis' Portfolio | {currentTab} </title>
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></Header>
      <main>
        {renderTab()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
