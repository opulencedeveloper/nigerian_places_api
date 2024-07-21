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
exports.stateController = void 0;
const enum_1 = require("../utils/enum");
const service_1 = require("./service");
class StateController {
    fetchStates(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const states = yield service_1.stateService.fetchStates();
            return res.status(200).json({
                message: enum_1.MessageResponse.Success,
                description: "States fetched successfully!",
                data: states,
            });
        });
    }
    fetchStateDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const stateId = req.params.id;
            const stateDetail = yield service_1.stateService.fetchStateDetail(stateId);
            if (!stateDetail) {
                return res.status(404).json({
                    message: enum_1.MessageResponse.Error,
                    description: "The state with the provided ID does not exist!",
                    data: null,
                });
            }
            return res.status(200).json({
                message: enum_1.MessageResponse.Success,
                description: "State details fetched successfully!",
                data: stateDetail,
            });
        });
    }
    uploadStates(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const retrivedStateData = req.body;
            yield service_1.stateService.uploadStateData(retrivedStateData);
            return res.status(201).json({
                message: enum_1.MessageResponse.Success,
                description: "States uploaded successfully!",
                data: null,
            });
        });
    }
}
exports.stateController = new StateController();
