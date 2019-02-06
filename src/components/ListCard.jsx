import React from 'react'

class ListCard extends React.Component {
  render () {
    const { data } = this.props;
    // console.log('data', data);
    return (
      <p className="list-card">{data.text}</p>
    )
  }
}

export default ListCard;
