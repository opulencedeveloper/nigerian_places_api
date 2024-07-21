import { Router } from "express";

import { stateDetailController } from "./controller";
import { wrapAsync } from "../utils";

export const StateDetailRouter = Router();

 StateDetailRouter.post(
  "/state/detail",
  wrapAsync(stateDetailController.uploadStateDetail)
);

