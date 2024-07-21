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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateController = void 0;
const axios_1 = __importDefault(require("axios"));
const enum_1 = require("../utils/enum");
const service_1 = require("./service");
class StateController {
    uploadStates(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get("https://api.facts.ng/v1/states");
            console.log(response);
            if (response.data && Array.isArray(response.data)) {
                yield Promise.all(response.data.map((stateData) => __awaiter(this, void 0, void 0, function* () {
                    const retrivedStateData = {
                        id: stateData.id,
                        capital: stateData.capital,
                        name: stateData.name,
                        region: stateData.region,
                        slogan: stateData.slogan
                    };
                    yield service_1.stateService.uploadStateData(retrivedStateData);
                })));
                return res.status(201).json({
                    message: enum_1.MessageResponse.Success,
                    description: "States uploaded successfully!",
                    data: null,
                });
            }
            else {
                return res.status(400).json({
                    message: enum_1.MessageResponse.Error,
                    description: "Invalid data format from API",
                    data: null,
                });
            }
        });
    }
}
exports.stateController = new StateController();