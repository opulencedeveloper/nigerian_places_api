"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateDetailRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const utils_1 = require("../utils");
exports.StateDetailRouter = (0, express_1.Router)();
exports.StateDetailRouter.post("/state/detail", (0, utils_1.wrapAsync)(controller_1.stateDetailController.uploadStateDetail));
