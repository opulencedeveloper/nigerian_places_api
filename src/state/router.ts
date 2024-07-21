import { Router } from "express";

import { stateController } from "./controller";
import { wrapAsync } from "../utils";

export const StateRouter = Router();

StateRouter.get(
  "/states",
  wrapAsync(stateController.fetchStates)
);

 StateRouter.get(
  "/states/:id",
  wrapAsync(stateController.fetchStateDetail)
);

