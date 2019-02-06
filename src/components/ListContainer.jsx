import React from 'react'
import ListCard from './ListCard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTodos } from '../actions'

class ListContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('nextProps', nextProps);
  // }

  renderCards = () => {
    const { data } = this.props.todos;
    console.log("LC todos", data);
    if (data) {
      return data.map(i => {
        return <ListCard key={i._id} data={i}/>
      })
    }
  }

  render () {
    // console.log('ListContainer Props', this.props);
    return (
      <div className="list-container">
        {this.renderCards()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log("mstp", state);
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
