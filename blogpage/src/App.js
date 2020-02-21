import React from 'react';
import './App.css';

import SignIn from './components/sign-in/sign-in.component';
import { auth, createAuthorDocument } from './firebase/firebase.utils.js';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentAuthor: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async authorAuth => {
			if (authorAuth) {
				const authorRef = await createAuthorDocument(authorAuth);
				authorRef.onSnapshot(snapShot => {
					this.setState({
						currentAuthor: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
				});
			} else {
				this.setState({ currentAuthor: authorAuth });
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
				{this.state.currentAuthor ? (
					<div>
						<p>Logged in as {this.state.currentAuthor.authorName}</p>
						<img className="avatar" alt="author" src={this.state.currentAuthor.authorAvatar} />
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
