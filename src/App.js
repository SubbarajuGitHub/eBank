import './App.css'

import {Switch, Route} from 'react-router-dom'

import LoginPage from './components/LoginPage'

const App = () => (
  <>
    <Switch>
      <Route exact path="/ebank/login" component={LoginPage} />
    </Switch>
  </>
)

export default App
