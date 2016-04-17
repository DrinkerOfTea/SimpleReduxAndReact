var ToDoController = (function() {

    // Create a store:
    var store = Redux.createStore(ToDoReducer.todoApp);

    // Counter for the item id increment:
    var counter = 0;

    // Call back for when a new todo is submitted:
    var onSubmit = function(text, ev) {
        store.dispatch({
             type  : "ADD_TODO",
             id    : counter++,
             text  : text
        });
    };

    var onToggle = function(id, ev) {
        store.dispatch({
            type: "TOGGLE_TODO",
            id  : id
        });
    }

    var onVisibilityChange = function(filter, ev) {
        store.dispatch({
            type: "SET_VISIBILITY_FILTER",
            filter: filter
        });
    }

    // Render method for whole todo list:
    var render = function() {
        ReactDOM.render(
            React.createElement(ToDoComponent, { todos: store.getState().todos,
                selectedFilter: store.getState().visibilityFilter, onSubmit: onSubmit, onToggle: onToggle,
                onVisibilityChange: onVisibilityChange}),
            $("#to-do")[0]
        );
    }

    // Subscribe to changes in the model for re-rendering:
    store.subscribe(render);

    // Render to begin with:
    render();

}());