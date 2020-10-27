import React from 'react'
import FirstLayout from './Pages/FirstLayout'
import SecondLayout from './Pages/SecondLayout'
import ThirdLayout from './Pages/ThirdLayout'
import "./Index.scss"
import Menu from './UI/Menu';
import Header from './UI/Header'
import { Route, BrowserRouter, Switch } from 'react-router-dom'


function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Header />
        <FirstLayout />
        <SecondLayout />
        <ThirdLayout />
        <Switch>
          <Route path="/menu" exact>
            <Menu />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
