import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import config from './firebase.config';

firebase.initializeApp(config);

export const createAuthorDocument = async (authorAuth, additionalData) => {
	if (!authorAuth) return;
	console.log(authorAuth);
	const authorRef = firestore.doc(`authors/${authorAuth.uid}`);
	const snapShot = await authorRef.get();
	if (!snapShot.exists) {
		const { displayName, email, photoURL } = authorAuth;
		const createdAt = new Date();
		try {
			await authorRef.set({
				authorName: displayName,
				authorEmail: email,
				authorAvatar: photoURL,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.error('error creating author', error.message);
		}
	}
	return authorRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
