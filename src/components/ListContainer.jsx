import React from 'react'
import ListCard from './ListCard'

class ListContainer extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(res => res.json())
    .then(json => this.setState({ items: json }))
  }

  renderCards = () => {
    return this.state.items.map(i => {
      return <ListCard key={i.id} data={i}/>
    })
  }

  render () {
    return (
      <div className="list-container">
        {this.renderCards()}
      </div>
    )
  }
}

export default ListContainer;
