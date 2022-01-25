import Mongoose from "mongoose";

const todoschema = new Mongoose.Schema({   // Define the schema of the collection in Mongodb
    "todoTitle": {
        type:String,
        required: "todoTitle is required"
    },
    "todoDescription": {
        type:String,
        required: "todoTitle is required"
    },
    "createdDate": {
        type:Date,
        default:Date.now
    },
    "lastModifiedDate": {
        type:Date,
        default: Date.now
    },
   },   {
        versionKey:false
    
});

const todo = Mongoose.model('todo',todoschema);
export default todo;