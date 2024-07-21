"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const utils_1 = require("../utils");
exports.StateRouter = (0, express_1.Router)();
exports.StateRouter.post("/states", (0, utils_1.wrapAsync)(controller_1.stateController.uploadStates));
