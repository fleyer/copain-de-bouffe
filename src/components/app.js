import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Food from '../routes/food'

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Food path="/food/:item" />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
		</Router>
	</div>
)

export default App;
