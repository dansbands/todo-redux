import React from 'react'

class Form extends React.Component {
  render () {
    return (
      <form className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control"></input>
        </div>
        <button type="submit" className="btn btn-outline-primary ml-3">Submit</button>
      </form>
    )
  }
}

export default Form;
