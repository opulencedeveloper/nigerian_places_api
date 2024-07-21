"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateDetailController = void 0;
const enum_1 = require("../utils/enum");
const service_1 = require("./service");
class StateDetailController {
    uploadStateDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const stateDetailData = req.body;
            const state = yield service_1.stateDetailService.uploadStateDetailData(stateDetailData);
            return res.status(201).json({
                message: enum_1.MessageResponse.Success,
                description: "State details uploaded successfully!",
                data: state,
            });
        });
    }
}
exports.stateDetailController = new StateDetailController();
