import mongoose,{connect} from 'mongoose';
import {MONGO_URI} from '../config';
//const mongoose = require('mongoose');
export const connectDB = () => {
    mongoose.set('strictQuery',true);
    connect(MONGO_URI as string);
    
   
}