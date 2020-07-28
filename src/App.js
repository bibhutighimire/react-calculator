import React from 'react';
import './App.css';

class App extends React.Component
{
constructor(props)
{
  super(props);
  this.state = {
    inputOne:"",
    inputTwo:"",
    operator:"plus",
    result:""
  };
  
}    

submitHandler = (event) => {

  if(this.state.operator==="plus")
  {
    this.setState({result: parseInt(this.state.inputOne) + parseInt(this.state.inputTwo) });
   
  }

  if(this.state.operator==="minus")
  {
    this.setState({result:this.state.inputOne - this.state.inputTwo});
  }

  if(this.state.operator==="divide")
  {
    this.setState({result:this.state.inputOne / this.state.inputTwo});
  }

  if(this.state.operator==="multiply")
  {
    this.setState({result:this.state.inputOne * this.state.inputTwo});
  }
  console.log(this.state.result);
  console.log("result");
  event.preventDefault()
};

handleChangeInputOne = (event) => {
this.setState(
  {
    inputOne: event.target.value 
  }
)
}

handleChangeInputTwo = (event) => {
  this.setState(
    {
      inputTwo: event.target.value 
    }
  )
  }

  handleChangeOperator = (event) => {
    this.setState(
      {
        operator: event.target.value 
      }
    )
    }

    handleResult = (event) => {
      this.setState(
        {
          result: event.target.value 
        }
      )
      }
      

render() {
  return (
    <>
    <h1>My Calculator</h1>
      <form onSubmit={this.submitHandler}>
        <div>
          <label >Input 1</label>
          <input type="text" id="inputOne" value={this.state.inputOne} onChange={this.handleChangeInputOne}/>
        </div>
        <div>
          <label>Operator</label>
          <select value={this.state.operator} onChange={this.handleChangeOperator}>
            <option value="plus">Add</option>
            <option value="minus">Substract</option>
            <option value="divide">Divide</option>
            <option value="multiply">Multiply</option>
          </select>
        </div>
        <div>
          <label>Input 2</label>
          <input type="text" id="inputTwo" value={this.state.inputTwo} onChange={this.handleChangeInputTwo}/>
        </div>
        <div>
          <button type="submit" value="Calculate" >Calculate</button>
        </div>
        <div>
         <p id="result"  >Result: {this.state.result}</p>
         
        </div>
      </form>
  
    </>
  );
}
}
export default App;
