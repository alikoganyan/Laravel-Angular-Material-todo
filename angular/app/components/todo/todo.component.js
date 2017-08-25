class TodoController{
    constructor(){
        'ngInject';
        this.todos = [];

        //
    }

    $onInit(){
        this.todos = [
            {text: "todo1"},
            {text: "todo2"},
            {text: "todo3"},
            {text: "todo4"},
            {text: "todo5"}
        ]
    }

    addTodo(todo) {
        if (todo == '') return;
        
        this.newTodo = ''
        this.todos.push({text: todo});
    }

    removeTodo(todo) {
        let index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
    }
}

export const TodoComponent = {
    templateUrl: './views/app/components/todo/todo.component.html',
    controller: TodoController,
    controllerAs: 'vm',
    bindings: {}
}
