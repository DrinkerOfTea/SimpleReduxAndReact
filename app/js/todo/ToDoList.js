var ToDoList = (function() {

    var toDoList =  React.createClass({

        propTypes: {
            onToDoClick: React.PropTypes.func.isRequired,
            todos: React.PropTypes.array.isRequired
        },

        render: function() {

            var _this = this;

            var listItems = this.props.todos.map(function(todo) {
                return React.createElement(ToDo, { key: todo.id, onClick: _this.props.onToDoClick.bind(_this, todo.id), todo: todo});
            });

            // Header for list:
            listItems.unshift(React.createElement("li", { key: -1, className: "collection-header"}, React.createElement("h4", null, "Your list of tasks")));

            // List of todos:
            list = React.createElement("ul", { className:"collection to-do-list" }, listItems);

            return list;
        }
    });

    return toDoList;

}());