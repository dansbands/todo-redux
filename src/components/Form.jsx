import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { postTodo, fetchTodos } from '../actions'

class Form extends React.Component {
  state = {
    text: '',
    update: false
  }

  componentWillReceiveProps(nextProps) {
    // console.log('nextProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.update) {
      this.props.fetchTodos()
      console.log('update');
      this.setState({ update: false })
    }
    return true
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.postTodo(this.state)

    this.setState({text: '', update: true})
  }

  render () {
    console.log('value', this.props);
    return (
      <form className="form-inline main" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={this.state.value}
            onChange={this.handleChange}></input>
        </div>
        <button type="submit" className="btn btn-outline-primary ml-3">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchTodos, postTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
