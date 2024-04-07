import { STORAGE_FILMS_KEY } from './constants';
import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	addDoc,
	setDoc,
	getDocs,
	writeBatch,
	doc,
	serverTimestamp,
	query,
	orderBy,
	updateDoc,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyA1IxvImFlN4Lv37j2xivAtywQG73oT6TU',
	authDomain: 'films-ff73e.firebaseapp.com',
	projectId: 'films-ff73e',
	storageBucket: 'films-ff73e.appspot.com',
	messagingSenderId: '688364422913',
	appId: '1:688364422913:web:29467ef5a0e4fb12ec3d00',
};

const app = initializeApp(firebaseConfig);

export class Storage {
	constructor() {
		this.db = getFirestore(app);
		this.key = STORAGE_FILMS_KEY;
	}

	async pull() {
		const ref = collection(this.db, this.key);
		const q = query(ref, orderBy('createdAt'));
		const querySnapshot = await getDocs(q);
		const films = [];

		querySnapshot.forEach(doc => {
			films.push({
				id: doc.id,
				title: doc.data().title,
			});

			console.log(`${doc.id} => ${doc.data().title}`);
		});
		return films;
	}

	async push(film) {
		try {
			const docRef = await addDoc(collection(this.db, this.key), {
				title: film.title,
				done: false,
				createdAt: serverTimestamp(),
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	}

	async delete(films) {
		const batch = writeBatch(this.db);

		films.forEach(film => {
			const ref = doc(this.db, this.key, film.id);
			batch.delete(ref);
		});

		await batch.commit();
	}
}
