import mongoose, { Schema} from "mongoose";

import { IStateDetail } from "./interface";


const stateDetailSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
  },
  lgas: {
    type: [String],
    required: true,
  },
  neighbours: {
    type: [String],
    required: true,
  },
  towns: {
    type: [String],
    required: true,
  } 
});

const StateDetail = mongoose.model<IStateDetail>("StateDetail", stateDetailSchema);

export default StateDetail;
