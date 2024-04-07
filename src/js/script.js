import '../scss/style.scss';
import { TODOS_STORAGE_KEY } from './constans';
import { createTodosModel } from './model';
import { createStorage } from './storage';
import { createView } from './view';

const inputNode = document.getElementById('input');
const btnNode = document.getElementById('btn');
const btnClearNode = document.getElementById('clearBtn');

const initialTodos = [];
const model = createTodosModel(initialTodos);
const view = createView('output', handleclickTodo);
const storage = createStorage(TODOS_STORAGE_KEY);

storage.pull().then(todos => {
	model.setTodos(todos);
	view.renderTodos(model.getTodos());
});

btnNode.addEventListener('click', function () {
	const todoTitle = inputNode.value;

	const todo = model.addTodo({
		title: todoTitle,
	});

	view.addTodo(todo);

	storage.push(todo);
});

btnClearNode.addEventListener('click', function () {
	storage.delete(model.getTodos());

	model.setTodos([]);

	view.clearTodos();
});

function handleclickTodo(id) {
	model.toggleTodo(id);

	storage.update(model.getTodo(id));
}
