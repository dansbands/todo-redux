import React, { Component } from 'react';
import './css/App.css';
import Form from './components/Form'
import ListContainer from './components/ListContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">

            <Form />
            <ListContainer />

          </div>
        </div>

      </div>
    );
  }
}

export default App;
