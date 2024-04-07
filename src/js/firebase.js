async function add() {
	try {
		const docRef = await addDoc(collection(db, 'todos'), {
			title: 'Задача 3',
			status: 'active',
		});

		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
}

async function get() {
	const querySnapshot = await getDocs(collection(db, 'todos'));
	querySnapshot.forEach(doc => {
		console.log(`${doc.id} => ${doc.data().title} ${doc.data().status}`);
	});
}






