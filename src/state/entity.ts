import mongoose, { Schema} from "mongoose";

import { IState } from "./interface";


const stateSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  slogan: {
    type: String,
    required: true,
  }, 
});

const State = mongoose.model<IState>("State", stateSchema);

export default State;
