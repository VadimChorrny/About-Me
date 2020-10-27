import React from 'react';
import FirstLayout from './Pages/FirstLayout'
import SecondLayout from './Pages/SecondLayout'
import ThirdLayout from './Pages/ThirdLayout'
import "./Index.scss"
import Menu from './UI/Menu';


function App() {
  return (
    <div className="App">
      {/* <FirstLayout />
      <SecondLayout />
      <ThirdLayout /> */}
      <Menu />
    </div>
  );
}

export default App;
