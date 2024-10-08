import { TaskModel } from "../models"
export const taskService = {
     getAll: async()=>{
        return await TaskModel.find(); 
    },
    getById: async(id: string)=>{
        return await TaskModel.findById(id); 
    },

    create: async(entity: object)=>{
        return await TaskModel.create(entity);
    },

    update: async(id: string, body: object)=>{
        return await TaskModel.findByIdAndUpdate(id,body);
    },

    delete: async(id: string)=>{
        return await TaskModel.findByIdAndDelete(id);
    }
}