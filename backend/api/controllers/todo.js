import { response } from 'express';
import todo from '../models/todo.js';
import * as todoService from '../services/todo.js';
const setSuccessResponse = (data, response) => {
    response.status(200);
    response.json(data);
}
const errorHandler = (message, response) => {
    response.status(500);
    response.json({ error: message });
}
export const index = async(request,response)=>{

try{
const todo = await todoService.search();   // Get all todos
setSuccessResponse(todo, response);

}
catch(e)
{
   

    errorHandler(e.message,response);
}
}

export const save = async(request, response) => {
    try {
        const todo = {...request.body };
        const newtodo = await todoService.create(todo);  // Create a new todo.
        setSuccessResponse(newtodo, response);
    } catch (e) {
        errorHandler(e.message, response);
    }
}

export const get = async(request, response) => {

    try {
        const id = request.params.id;
        const todo = await todoService.get(id);  // Get a specific todo by id.
        setSuccessResponse(todo, response);
        

    } catch (e) {
        errorHandler(e, response);
    }
}

export const update = async(request, response) => {

    try {
        const id = request.params.id;
        const todo = {...request.body, id };

        const updatedTodo = await todoService.update(todo); // Update a specific todo based on id.
        setSuccessResponse(updatedTodo, response);
        

    } 
    catch (e) {
        errorHandler(e, response);
    }
}

export const remove = async(request, response) => {

    try {
        const id = request.params.id;
        const todo = await todoService.remove(id);   // Delete a specific todo based on id.
        setSuccessResponse(`Todo ${id} deleted successfully!`, response);
        

    } catch (e) {
        errorHandler(e, response);
    }
}
