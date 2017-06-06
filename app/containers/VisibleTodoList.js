import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';

import { getVisibleTodos } from '../selectors'



const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state, ownProps)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
