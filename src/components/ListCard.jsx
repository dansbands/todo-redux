import React from 'react'

class ListCard extends React.Component {
  render () {
    const { data } = this.props;
    return (
      <p className="list-card">{data.title}</p>
    )
  }
}

export default ListCard;
