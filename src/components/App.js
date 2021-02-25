import React from 'react';
import history from '../history.js'
import {Router,Route,Switch} from 'react-router-dom'
import Main from './Main.js'
import Register from './Register'
import Admin from './Admin.js';
import Dashboard from './Dashboard.js';
import Error from './Error.js'
import Countries from './Countries.js'
import Stats from './Stats'
import Timeline from './Timeline'
import TestComponent from './TestComponent'

function App() {
  return (
      <div>
          <Router history={history}>
                    <div>
                        <Switch>
                            <Route path='/' exact component={Main}/>
                            <Route path='/register' exact component={Register}/>
                            <Route path='/admin' exact component={Admin}/>
                            <Route path='/dashboard' exact component={Dashboard}/>
                            <Route path='/countries' exact component={Countries}/>
                            <Route path='/test' exact component={TestComponent}/>
                            <Route path='/countries/stats/:FL' exact component={Stats}/>
                            <Route path='/countries/timeline/:FL' exact component={Timeline}/>
                            <Route path='/*' exact component={Error}/>
                        </Switch>
                    </div>
            </Router>
      </div>
  );
}

export default App;
