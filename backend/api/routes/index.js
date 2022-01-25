import router from './todo.js';

export default (app) =>
{
    app.use('/',router);
}