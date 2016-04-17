var ToDoComponent = (function() {

    var toDoComponent = React.createClass({

        propTypes: {
            todos: React.PropTypes.array.isRequired,
            onSubmit: React.PropTypes.func.isRequired,
            onToggle: React.PropTypes.func.isRequired,
            onVisibilityChange: React.PropTypes.func.isRequired,
            selectedFilter: React.PropTypes.string.isRequired
        },

        getVisibibleToDos: function(todos, visibilityFilter) {
            return todos.filter(function(todo) {
                switch (visibilityFilter) {
                    case "SHOW_ACTIVE":
                        return !todo.completed;
                    case "SHOW_COMPLETED":
                        return todo.completed;
                    default:
                        return true;
                }
            });
        },

        render: function () {

            var _this = this;

            var visibleTodos = this.getVisibibleToDos(this.props.todos, this.props.selectedFilter);

            var inputCreated = function(ref) {
                this.input = ref;
            }

            // *** Could split input and button into an Add ToDo component:
            // Input component:
            var inputField =  React.createElement("input", { ref: inputCreated.bind(this), id: "to-do-input", type: "text"});

            var input = React.createElement("div", { className: "input-field" },
                inputField,
                React.createElement("label", { htmlFor: "#to-do-input"}, "Add task")
            );

            var handleClick = function() {
                this.props.onSubmit(this.input.value);
                this.input.value = "";
            }

            // Button:
            var button = React.createElement(
                "button",
                { className: "waves-effect waves-light btn",
                  onClick: handleClick.bind(this)
                },
                "Add task"
            );



            // Contents of list of todos, only rendered if there is more than one item:
            var list = null;

            if(visibleTodos.length > 0)
            {
                list = React.createElement(ToDoList, { onToDoClick: _this.props.onToggle,
                    todos: visibleTodos });
            }

            // ***Could split this into a Footer component***

            // Filters:
            var showAllLink = React.createElement(VisibilityLink, { key: "SHOW_ALL", filter: "SHOW_ALL", selectedFilter: this.props.selectedFilter,
                onClick: this.props.onVisibilityChange.bind(this, "SHOW_ALL") } , ["Show All"]);

            var showActiveLink = React.createElement(VisibilityLink, { key: "SHOW_ACTIVE", filter: "SHOW_ACTIVE", selectedFilter: this.props.selectedFilter,
                onClick: this.props.onVisibilityChange.bind(this, "SHOW_ACTIVE") } , ["Show Active"]);

            var showCompletedLink = React.createElement(VisibilityLink, { key: "SHOW_COMPLETED", filter: "SHOW_COMPLETED", selectedFilter: this.props.selectedFilter,
                onClick: this.props.onVisibilityChange.bind(this, "SHOW_COMPLETED") } , ["Show Completed"]);

            var visibilityDiv = React.createElement("div", { className:"to-do-visibility-div"}, [showAllLink, showActiveLink, showCompletedLink]);

            // Create the whole to do list component:
            return React.createElement(
                "div",
                { className: "to-do-component" },
                input, button, list, visibilityDiv);
        }
    });

    return toDoComponent;
}());

