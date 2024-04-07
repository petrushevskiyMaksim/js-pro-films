export function createView(selector, onClickTodo) {
	const node = document.getElementById(selector);

	return {
		node,
		renderTodos: function ({ todosIds, todosById }) {
			todosIds.forEach(id => {
				this.addTodo(todosById[id]);
			});
		},

		clearTodos: function () {
			this.node.innerHTML = '';
		},

		addTodo: function (todo) {
			const div = document.createElement('div');
			const input = document.createElement('input');
			const lable = document.createElement('lable');

			input.setAttribute('type', 'checkbox');
			input.setAttribute('id', todo.id);

			input.onclick = () => {
				onClickTodo(todo.id);
			};

			if (todo.done) {
				input.setAttribute('checked', true);
			}

			lable.innerText = todo.title;
			lable.setAttribute('for', todo.id);

			div.append(input, lable);

			this.node.append(div);
		},
	};
}
