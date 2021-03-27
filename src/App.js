// import logo from "./logo.svg";

import {

	BrowserRouter as Router,
	Link,
	Switch,
	Route

} from 'react-router-dom'

import Home from './Home'
import Login from './users/Login'
import Register from './users/Register'

function App() {
  return (

    <div>
			<Router>
				<ul>
					<li>
						<Link to="/">HOME</Link>
					</li>
					<li>
						<Link to="/users/login">LOGIN</Link>
					</li>
					<li>
						<Link to="/users/register">REGISTER</Link>
					</li>
				</ul>
        
				
				<Switch>
					
					<Route path="/users/login">
						<Login />
					</Route>
					<Route path="/users/register">
						<Register />
					</Route>
          <Route path="/">
						<Home />
					</Route>					
						
				</Switch>				
			</Router>
		</div>


    // <div className="App">
    //   <Home />
    // </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
