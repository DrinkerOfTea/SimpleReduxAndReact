/**
 * Created by James on 17/04/2016.
 */

var ToDo = (function() {

    var toDo =  React.createClass({

        propTypes: {
            onClick: React.PropTypes.func.isRequired,
            todo: React.PropTypes.object.isRequired
        },

        render: function() {
            return React.createElement("li", { onClick: this.props.onClick,
                className: "collection-item" + ( this.props.todo.completed ? " to-do-completed" : "" ) },
                this.props.todo.text);
        }
    });

    return toDo;

}());