import React from 'react';
import './App.css';

import SignIn from './components/sign-in/sign-in.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	signOut() {
		auth.signOut();
	}

	render() {
		return (
			<div className="App">
				{this.state.currentUser ? (
					<div>
						<p>Logged in as {this.state.currentUser.displayName}</p>
						<img className="avatar" alt="user" src={this.state.currentUser.photoURL} />
						<button onClick={this.signOut}>Log out</button>
					</div>
				) : (
					<SignIn />
				)}
			</div>
		);
	}
}

export default App;
