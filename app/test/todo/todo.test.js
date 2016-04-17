/**
 * Tests for the todo React/Redux application
 */
(function () {

    //Test 1 - Add item:
    var test1 = {
        stateBefore: [],
        stateAfter: [{
            id: 0,
            text: 'Learn Redux',
            completed: false
        }],
        action: {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        }
    }

    deepFreeze(test1.stateBefore);
    deepFreeze(test1.action);

    //Test reducing from empty array gives correct result
    expect(ToDoReducer.todos(test1.stateBefore, test1.action)).toEqual(test1.stateAfter);

    //Test behaviour for undefined initial state:@
    expect(ToDoReducer.todos(null, test1.action)).toEqual(test1.stateAfter);


    //Test 2 - toggle:
    var test2 = {
        stateBefore: [{
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
            {
                id: 1,
                text: 'Go shopping',
                completed: false
            }],
        stateAfter: [{
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
            {
                id: 1,
                text: 'Go shopping',
                completed: true
            }],
        action: {
            type: 'TOGGLE_TODO',
            id: 1
        }
    }

    deepFreeze(test2.stateBefore);
    deepFreeze(test2.action);

    //Test reducing from empty array gives correct result
    expect(ToDoReducer.todos(test2.stateBefore, test2.action)).toEqual(test2.stateAfter);

    //Test 3: Store

    var store = Redux.createStore( ToDoReducer.todoApp );

    store.dispatch(test1.action);

    console.log(JSON.stringify(store.getState()));

    store.dispatch({
        type: "SET_VISIBILITY_FILTER",
        filter: "SHOW_SOME"
    })

    console.log(JSON.stringify(store.getState()));

    console.log("Todo tests passed!");

})();


