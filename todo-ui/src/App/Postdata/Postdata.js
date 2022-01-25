import React from 'react';
import './Postdata.scss';
export class Postdata extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
          todoTitle:'',
          todoDescription:''

        }
    
  
      }
    
      changeHandler = e => {
  this.setState({[e.target.name]: e.target.value})
      }

      submitHandler = e =>{
      //e.preventDefault()
      console.log(this.state)

      const url = 'http://localhost:8000/todo';
      const value= this.state;
      const myJSON = JSON.stringify(value);
const options = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  body: myJSON
};

fetch(url, options)
  .then(response => {
    console.log(response.status);
  });             
      }

    
      render() {
        const {todoTitle,todoDescription} = this.state
        return (
          <div className="input">
            <form onSubmit={this.submitHandler}>
              <div>
            <input type="text" placeholder="todoTitle"  name="todoTitle"  value={todoTitle} onChange={this.changeHandler}></input> </div>
            <div>
            <input type="text"  placeholder="todoDescription" name="todoDescription"  value={todoDescription} onChange={this.changeHandler}></input> </div>
            <button type="submit">submit</button>

            </form>
          </div>
         
        )
      }
}