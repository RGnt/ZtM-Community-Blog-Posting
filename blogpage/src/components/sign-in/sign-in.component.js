import React from 'react';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
	render() {
		return (
			<div>
				<p>Not logged in.</p>
				<button onClick={signInWithGoogle}>Sign in with Google</button>
			</div>
		);
	}
}

export default SignIn;
