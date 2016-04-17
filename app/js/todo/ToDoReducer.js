var ToDoReducer = (function () {

    // Reducer for a single to do item
    var todo = function todo(state, action) {
        switch (action.type) {
            case 'ADD_TODO':
                return {
                    id: action.id,
                    text: action.text,
                    completed: false
                };
            case 'TOGGLE_TODO':
                if (state.id == action.id) {
                    return {
                        id: state.id,
                        text: state.text,
                        completed: !state.completed
                    };
                }
                else {
                    return state;
                }
            default:
                return state;
        }
    };

    // Reducer for array of all to do items
    var todos = function todos(state, action) {

        if (!state) {
            state = [];
        }

        // state.push({ msg: "whoops "});

        switch (action.type) {
            case 'ADD_TODO':
                return [...state, todo(undefined, action)];
            case 'TOGGLE_TODO':
                return state.map(
                    function (item) {
                        return todo(item, action);
                    }
                );
            default:
                return state;
        }
    };

    //Reducer for visibility filter:
    var visibilityFilter = function visibility(state, action) {
        if(!state) {
           state = "SHOW_ALL";
        }

        switch (action.type) {
            case "SET_VISIBILITY_FILTER":
                return action.filter;
                break;
            default:
                return state;
        }
    };

    var todoApp = Redux.combineReducers({
        todos           : todos,
        visibilityFilter: visibilityFilter
    });

    //Reducer for the whole app, which combines visibilityfilter and todos:
    //var todoApp = function todoApp(state, action) {
    //
    //    if(!state) {
    //        state = {};
    //    }
    //
    //    return {
    //        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    //        todos: todos(state.todos, action)
    //    }
    //};

    return {
        todos: todos,
        todoApp: todoApp
    }

}());
