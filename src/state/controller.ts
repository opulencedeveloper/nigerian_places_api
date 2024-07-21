import { Request, Response } from "express";

import { MessageResponse } from "../utils/enum";
import { stateService } from "./service";
import { IStateData } from "./interface";

class StateController {
  public async fetchStates(req: Request, res: Response) {
    const states = await stateService.fetchStates();

    return res.status(200).json({
      message: MessageResponse.Success,
      description: "States fetched successfully!",
      data: states,
    });
  }

  public async fetchStateDetail(req: Request, res: Response) {
    const stateId: string = req.params.id;

    const stateDetail = await stateService.fetchStateDetail(stateId);

    if(!stateDetail) {
      return res.status(404).json({
        message: MessageResponse.Error,
        description: "The state with the provided ID does not exist",
        data: null,
      });
    }

    return res.status(200).json({
      message: MessageResponse.Success,
      description: "States fetched successfully!",
      data: stateDetail,
    });
  }

  public async uploadStates(req: Request, res: Response) {
    const retrivedStateData: IStateData = req.body;

    await stateService.uploadStateData(retrivedStateData);

    return res.status(201).json({
      message: MessageResponse.Success,
      description: "States uploaded successfully!",
      data: null,
    });
  }
}

export const stateController = new StateController();
