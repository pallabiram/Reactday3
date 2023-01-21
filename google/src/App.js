import React from 'react';
import './App.scss';
import SearchButton from './pages/SearchButton';
import Logo from './pages/Logo';
import LuckyButton from './pages/LuckyButton';
import LanguageNote from './pages/LanguageNote';


function App() {
  return (
    <div className="App">
      <Logo/>
      <SearchButton/>
      <LuckyButton/>
      <LanguageNote/>
    </div>
  );
}

export default App;
