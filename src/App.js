import React, { Component } from 'react';
import SnowStorm from 'react-snowstorm';

import NavBar from './Components/NavBar'
import TitleSection from './Sections/TitleSection'
import AboutSection from './Sections/AboutSection'
import SkillsSection from './Sections/SkillsSection'

import './Css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <SnowStorm />
        </div>
        
        <NavBar />

        <div className="App" >

          <TitleSection />
          <AboutSection />
          <SkillsSection />
        </div>
      </div>
    );
  }
}

export default App;
