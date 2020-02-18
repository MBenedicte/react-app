import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    arrayList: [],
    name: '',
    id: 0
  };
  add = () => {
    const newElement = { name: this.state.name, size: this.state.id };
    this.setState({ arrayList: [...this.state.arrayList, newElement] });
  };
  getInputName = event => {
    this.setState({ name: event.target.value });
  };
  getInputId = event => {
    this.setState({ id: event.target.value });
  };
  remove = elementName => {
    const newList = [...this.state.arrayList];
    this.setState({
      arrayList: newList.filter(item => item.name !== elementName.target.value)
    });
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
                placeholder='Enter your element name'
                onChange={this.getInputName}
                value={this.state.name}
              />
              <input
                type='text'
                placeholder='Enter your element id'
                onChange={this.getInputId}
                value={this.state.id}
              />
            </div>
            <div>
              <button className='add_btn' onClick={this.add}>
                Add
              </button>
            </div>
          </div>
          <hr></hr>
          <div>
            {liftOfElements.length === 0 ? (
              <p>No list so far</p>
            ) : (
              <h1>List of elements</h1>
            )}
            <div>
              {liftOfElements.map(k => (
                <div key={k.size}>
                  {k.name}
                  <button
                    className='delete_btn'
                    onClick={this.remove}
                    value={k.name}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
