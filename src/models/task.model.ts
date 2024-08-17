import {Schema, model} from 'mongoose'

const tasks = new Schema({
    name: {type: String},
    description: {type: String}
    
});

export const TaskModel = model('tasks',tasks);