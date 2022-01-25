// import logo from './logo.svg';
import React from 'react';
import './App.scss';
import { Navbar } from './Navbar/Navbar';
import { Contacts } from './Contacts/Contacts';
import { Displaytodo } from './Displaytodo/Displaytodo';
import {Newtodo} from './Newtodo/Newtodo';
import { Postdata } from './Postdata/Postdata';
export class App extends React.Component
{
  constructor(props)
  {
   super(props);
    this.state =
    { name:"",
      todolist: [{"_id":"6193cb4de6282db0769c84ec","todoTitle":"assignment ","todoDescription":"Aed, Webdev","createdDate":"2021-11-16T15:16:29.614Z","lastModifiedDate":"2021-11-16T15:16:29.614Z"}],
      visiblity:false
      
    };
  }
 
  handleCallback = (childData) =>{
    this.setState({name: childData})
}
  componentDidMount()
  {
    fetch("http://localhost:8000/todo").then((response) => response.json())
    .then((todolist) =>
    {
    this.setState({todolist})  
    });
    //console.log(this.state.todolist);
  }
  create()
  {
    this.setState({visiblity:true});
  }
  render() {

     return (
      // <Newtodo></Newtodo>
      <div className="list">

                 <label for="content">Type Below the content</label>

                 <Displaytodo todolist = {this.state.todolist}></Displaytodo>
                <Newtodo createHandler ={this.create.bind(this)}>

                  </Newtodo>
                  {this.state.visiblity?<Postdata></Postdata>:null}
             </div>
             
    );
  }
}


//export default App;
