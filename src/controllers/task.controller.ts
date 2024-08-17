import { Request, Response } from "express";
import { taskService } from "../services";
import { AnyKeys, AnyObject } from "mongoose";

export const taskController = {
    getAllTask : async (req: Request, resp:Response) =>{
        const data = await taskService.getAll();
        console.log(data);
        return resp.json(data);
    },

    getByIdTask : async (req: Request, resp:Response) =>{
        const {id} = req.params;
        const data = await taskService.getById(id);
        console.log(data);
        return resp.json(data);
    },

    create : async (req: Request, resp:Response) =>{
        console.log(req.body);
        const data = await taskService.create(req.body);
        return resp.json(data);
    },

    update : async (req: Request, resp:Response) =>{
        try{
            const {id} = req.params;
            const data = await taskService.update(id,req.body);
            return resp.json(data);
        }catch(error:any){
            resp.status(400).json({
                message: error.message
            })
        }
        
    },

    delete : async (req: Request, resp:Response) =>{
        try{
            const {id} = req.params;
            const data = await taskService.delete(id);
            return resp.json(data);
        }catch(error:any){
            resp.status(400).json({
                message: error.message
            })
        }
        
    },
}


