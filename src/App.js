import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from './Pages/Home';
import { BreakpointProvider } from 'react-socks'

function App() {
  return (
    <div className="App">
      <BreakpointProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          {/* <Footer /> */}
        </Router>
      </BreakpointProvider>
    </div>
  );
}

export default App;
