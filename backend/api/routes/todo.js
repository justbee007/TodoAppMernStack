import  express from "express";
import * as todoController from '../controllers/todo.js'

const router = express.Router();
router.route('/todo')
    .get(todoController.index) //URL for getting all todos
    .post(todoController.save); // URL for adding a new TODO 

router.route('/todo/:id')
    .get(todoController.get) // URL to get a specific todo
    .put(todoController.update)  // URL to update a specific todo
    .delete(todoController.remove); // URL to remove a specific todo


export default router;    