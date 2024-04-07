import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyA1IxvImFlN4Lv37j2xivAtywQG73oT6TU',
	authDomain: 'filmsIds-ff73e.firebaseapp.com',
	projectId: 'filmsIds-ff73e',
	storageBucket: 'filmsIds-ff73e.appspot.com',
	messagingSenderId: '688364422913',
	appId: '1:688364422913:web:29467ef5a0e4fb12ec3d00',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
