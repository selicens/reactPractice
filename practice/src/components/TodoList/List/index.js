import React, {Component} from 'react';
import Item from "../Item";
import PropTypes from "prop-types"
class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodos: PropTypes.func.isRequired,
        deleteTodos: PropTypes.func.isRequired
    }
    render() {
        return (
            <div>
                {
                    this.props.todos.map((item) => {
                        return <Item {...item}
                                     key={item.id}
                                     updateTodos={this.props.updateTodos}
                                     deleteTodos={this.props.deleteTodos}
                        />
                    })
                }
            </div>
        );
    }
}

export default List;
