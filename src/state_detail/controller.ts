import { Request, Response } from "express";

import { MessageResponse } from "../utils/enum";
import { stateDetailService } from "./service";
import { IStateDataDetail } from "./interface";

class StateDetailController {
  public async uploadStateDetail(req: Request, res: Response) {
    const stateDetailData: IStateDataDetail = req.body;

    const state = await stateDetailService.uploadStateDetailData(stateDetailData);

    return res.status(201).json({
      message: MessageResponse.Success,
      description: "State details uploaded successfully!",
      data: state,
    });
  }
}

export const stateDetailController = new StateDetailController();
