var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello',
	},
}); 

var app = new Vue({
	el: '#app2',
	data: {
		list:[
			{text: 'message 1'},
			{text: 'message 2'},
			{text: 'message 3'},
			{text: 'message 4'},
			{text: 'message 5'},
		],
	},
});

var app = new Vue({
	el:'#app3',
	data: {
		addText: '',
		list:[],
	},
	methods: {
		addToDo() {
			this.list.push({
				text: this.addText
			});
			this.addText = '';
		}
	}
});

var app = new Vue({
	el: '#app4',
	data: {
		selected: 'Option1',
	}
});

var app = new Vue({
	el: '#app5',
	data: {
		selected: '',
	}
});

var app = new Vue({
	el: '#app6',
	data: {
		selected_value: '',
	}
});
