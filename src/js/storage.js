import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	doc,
	setDoc,
	addDoc,
	getDocs,
	writeBatch,
	serverTimestamp,
	query,
	orderBy,
	updateDoc,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyD6C5nZVM5kx8bHEgUWetFiprbpK_lak4E',
	authDomain: 'todo-3f672.firebaseapp.com',
	projectId: 'todo-3f672',
	storageBucket: 'todo-3f672.appspot.com',
	messagingSenderId: '483023665879',
	appId: '1:483023665879:web:e8d260da769f5e178bce92',
};

export function createStorage(key) {
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	return {
		key,
		db,
		pull: async function () {
			const ref = collection(this.db, this.key);
			const q = query(ref, orderBy('createdAt'));
			const querySnapshot = await getDocs(q);

			const todos = [];

			querySnapshot.forEach(doc => {
				todos.push({
					id: doc.id,
					title: doc.data().title,
					done: doc.data().done,
				});
			});

			return todos;
		},
		push: async function (todo) {
			try {
				await setDoc(doc(this.db, this.key, todo.id), {
					title: todo.title,
					done: todo.done,
					createdAt: serverTimestamp(),
				});
			} catch (e) {
				console.error('Error adding document: ', e);
			}
		},
		delete: async function ({ todosIds }) {
			const batch = writeBatch(this.db);

			todosIds.forEach(id => {
				const ref = doc(this.db, this.key, id);
				batch.delete(ref);
			});

			await batch.commit();
		},
		update: async function (todo) {
			const ref = doc(this.db, this.key, todo.id);

			await updateDoc(ref, {
				done: todo.done,
			});
		},
	};
}
