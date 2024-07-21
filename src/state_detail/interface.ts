import { Document } from "mongoose";

interface BaseStateDetail {
  lgas: string[];
  neighbours: string[];
  towns: string;
}

export interface IStateDataDetail extends BaseStateDetail {
  id: string;
}

export interface IStateDetail extends Document, BaseStateDetail {
  id: string;
}
