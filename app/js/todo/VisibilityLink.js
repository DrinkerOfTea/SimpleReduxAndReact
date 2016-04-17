/**
 * Created by James on 16/04/2016.
 */

var VisibilityLink = (function() {

    var visibilityLink =  React.createClass({

        propTypes: {
            filter: React.PropTypes.string.isRequired,
            selectedFilter: React.PropTypes.string.isRequired,
            children: React.PropTypes.array.isRequired,
            onClick: React.PropTypes.func.isRequired
        },

        render: function() {

            var clickLink = function(ev) {
                ev.preventDefault();
                this.props.onClick(this.props.filter);
            };

            if(this.props.filter === this.props.selectedFilter)
            {
                return React.createElement("span", null, this.props.children );
            }

            return React.createElement("a", { href: "#", onClick: clickLink.bind(this) },
                this.props.children );

        }
    });

    return visibilityLink;

}());