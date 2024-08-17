import express,{ Express  } from "express";
import morgan from 'morgan';
import cors from 'cors';

import {connectDB} from './dao';
import {PORT} from './config';
import {routes} from "./routes";


export class Server {
    private app: Express;

    constructor () {
        this.app = express();
        connectDB();
        this.configuration();
        this.milddlewares();
        this.routes();
    }

    configuration (){
        this.app.set('port', PORT || 3001);
    }

    routes (){
        this.app.use('/api/task',routes.TaskRoute);
    }
    milddlewares(){
        this.app.use(morgan('dev'));
        this.app.use('*',cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }
    async database() {
        connectDB();
      }

    listen(){
        this.app.listen(this.app.get('port'),() => {
            console.log(`Server esta corriendo en el puerto${this.app.get('port')}`);
        })
        
    }
}