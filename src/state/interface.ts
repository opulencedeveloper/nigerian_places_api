import { Document } from "mongoose";

interface BaseState {
  name: string;
  region: string;
  capital: string;
  slogan: string;
}

export interface IStateData extends BaseState {
  id: string;
}

export interface IState extends Document, BaseState {
  id: string;
}
