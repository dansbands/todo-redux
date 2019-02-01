import React from 'react'
import ListCard from './ListCard'
import { fetchTodos } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ListContainer extends React.Component {
  // state = {
  //   items: []
  // }

  componentWillMount() {
    // fetch('https://jsonplaceholder.typicode.com/todos/')
    // .then(res => res.json())
    // .then(json => this.setState({ items: json }))
    this.props.fetchTodos()
  }

  renderCards = () => {
    const { todos } = this.props;
    console.log("todos", todos);
    if (todos.length) {
      return todos.map(i => {
        return <ListCard key={i.id} data={i}/>
      })
    }
  }

  render () {
    console.log('ListContainer Props', this.props);
    return (
      <div className="list-container">
        {this.renderCards()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("mstp", state);
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchTodos,
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
