import Todo from "../models/todo.js";
// Service takes care of logic 
export const search = (params = {}) => // Paramaters params for the request
{ 
const promise = Todo.find(params).exec();  //Returns a promise of database table
return promise;
};

export const create = (todo) =>   // Used to create a todo item
{
    const newtodo  = new Todo(todo);
    return newtodo.save();
}

export const get = (id) => {    // Used to get a todo item based on id
    const promise = Todo.findById(id).exec();
    return promise;
}

export const update = (todo) => {  // Used to update a todo item based on id
    todo._id = todo.id;
    const promise = Todo.findByIdAndUpdate(todo._id, todo, { new: true }).exec();
    return promise;
}

export const remove = (id) => {  // Used to delete a todo item based on id
    const promise = Todo.findByIdAndRemove(id).exec();
    return promise;
}