import React from 'react';
import './Displaytodo.scss';
import ReactDOM from 'react-dom'
export class Displaytodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoTitle:'',
            todoDescription:''
  
          }
        
        this.sample = this.sample.bind(this);
        this.sample1 = this.sample1.bind(this)
        this.delfn = this.delfn.bind(this);
        this.updatefn = this.updatefn.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
        this.complete = this.complete.bind(this);
        
            }
    sample(pain) 
    {
        
        let btnval = [...document.getElementsByClassName(pain+"p")];
               console.log(btnval)
               for(let i in btnval)
               {
                   console.log(btnval[i]);
                // btnval[i].setAttribute("hidden","block");
                btnval[i].removeAttribute("hidden");
            }
    }
            sample1(id) 
            {
        
                let btnval = [...document.getElementsByClassName(id+"p")];
                       console.log(btnval)
                       for(let i in btnval)
                       {
                           console.log(btnval[i]);
                        // btnval[i].setAttribute("hidden","block");
                        btnval[i].setAttribute("hidden","true");
                    }
                }
                delfn(psin)
                {   
                    fetch("http://localhost:8000/todo/"+psin)
                    fetch("http://localhost:8000/todo/"+psin, { method: 'DELETE' })
        .then(() => this.setState({ status: 'Delete successful' }));
        console.log(psin="!!!");
                }
             
                updatefn(idval)
                {
                    alert(idval);
                    let todonamebtnval = [...document.getElementsByClassName(idval+"expandbtn")];
                        alert(todonamebtnval[0].innerText);
                    let  tododescbtnval =  [...document.getElementsByClassName(idval+"p")];
                    alert(tododescbtnval[0].innerText);
                    let btnval =   document.getElementsByClassName(idval+"expandbtn");
                    let formval = [...document.getElementsByClassName(idval+"form")];
                    for(let i in formval)
                    {
                    formval[i].removeAttribute("hidden");
                   
                }
                let dumor = document.getElementsByClassName(idval+"inputheading");
                
                }     
                handlesubmit(id,title,desc){
                                              //e.preventDefault()
                                              console.log(id);
                                              console.log(title);
                                              console.log(desc);
                                              console.log(this.state)
                                        
                                              const url = 'http://localhost:8000/todo'+id;
                                              const value= this.state;
                                              const myJSON = JSON.stringify(value);
                                        const options = {
                                          method: 'PUT',
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
                  };  
                  changeHandler = e => {
                    this.setState({[e.target.name]: e.target.value})
                        }
                    
                        complete(id){
                          
                let btnval = [...document.getElementsByClassName(id+"classdiv")];
                console.log(btnval)
                for(let i in btnval)
                {
                    console.log(btnval[i]);
                 // btnval[i].setAttribute("hidden","block");
                 btnval[i].setAttribute("text-decoration","line-through");
             }
                        }
    render() 
    {   const {todoTitle,todoDescription} = this.state
       const title=null;
       const desc = null;
        const buttoelem = this.props.todolist.map((c, i) =>
         <div className={c._id+"classdiv"}><button className={c._id + "expandbtn"} onClick={() =>
             this.sample(c._id)}>{c.todoTitle}</button><button className={c._id + "clbtn"} onClick={() =>
                this.sample1(c._id)}><img alt = "Create" src="assets/uparrow.png" ></img></button>
                <p ref={c._id} className={c._id + "p"} hidden={true}>{c.todoDescription}</p>
                <button className={c._id + "deletebtn"} onClick={() =>
                this.delfn(c._id)}><img alt = "Delete" src="assets/delete.png" height="160px"width="160px"></img></button>
                <button className={c._id + "updatebtn"} onClick={() =>
                    this.updatefn(c._id)}><img alt = "Update" src="assets/edit.png" height="160px"width="160px"></img></button>
                    <form className={c._id+"form"} hidden={true}>
                        <input type="text" className = {c._id+"inputheading"} name="heading" value={title} onChange={this.changeHandler}>
                    </input> 
                    <input type="text" className={c._id+"description"} name="desc" value = {desc} onChange={this.changeHandler} >
                    </input>
                    <button className={c._id + "submitbtn"} onClick={() =>
                    this.handlesubmit(c._id,title,desc)}><img alt = "Update" src="assets/edit.png" height="160px"width="160px"></img>This</button>
                    </form>
                    <button className={c._id + "submitbtn"} onClick={() =>
                    this.complete(c._id)}><img alt = "Update" src="assets/edit.png" height="160px"width="160px"></img>completed</button>
                </div>);
                // this.state.paathu = {buttoelem};
        
            return (
                <div className="list">
                    <p>To Do App</p>
                    
                    
                    {/* <button onclick={this.fnexec}>Ajuba</button> */}
                    
                    {buttoelem}
                 </div>

            );
        
    }
}