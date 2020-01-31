import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    arrayList: [],
    inputValue: ''
  };
  add = () => {
    const newElement = { elementname: this.state.inputValue, size: 12 };
    return this.setState({ arrayList: [...this.state.arrayList, newElement] });
  };
  getInput = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const liftOfElements = this.state.arrayList;
    return (
      <div className='container'>
        <div className='main'>
          <h1>Add your list here</h1>
          <div className='input_class'>
            <div>
              <input
                type='text'
                placeholder='Enter your element here'
                onChange={this.getInput}
                value={this.state.inputValue}
              />
            </div>
            <div>
              <button className='add_btn' onClick={this.add}>
                Add
              </button>
              <button className='delete_btn'>Delete</button>
            </div>
          </div>
          <hr></hr>
          <div>
            <h1>The list</h1>
            <div>
              {liftOfElements.map(k => (
                <div key={k.size}>{k.elementname}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
