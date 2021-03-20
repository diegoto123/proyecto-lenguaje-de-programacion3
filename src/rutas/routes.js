import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import peliculas from '../paginas/peliculas';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/peliculas" component={peliculas}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;