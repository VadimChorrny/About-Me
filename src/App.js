import React from 'react'
import FirstLayout from './Pages/FirstLayout'
import SecondLayout from './Pages/SecondLayout'
import ThirdLayout from './Pages/ThirdLayout'
import Acces from './Pages/Acces'
import "./Index.scss"
import Menu from './UI/Menu';
import Header from './UI/Header'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import ModalWindow from './UI/ModalWindow'


function App() {


  return (

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/menu" exact>
            <Menu />
          </Route>
          <Route path="/" exact>
            <Header name='Vadim Chorrny' />
            <Acces />
          </Route>
          <Route path="/home" exact>
            <Header name='Vadim Chorrny' />
            <Acces />
          </Route>
          <Route path="/module" exact>
            <ModalWindow />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
