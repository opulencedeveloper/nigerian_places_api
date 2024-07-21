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
exports.stateService = void 0;
const entity_1 = __importDefault(require("./entity"));
const entity_2 = __importDefault(require("../state_detail/entity"));
class StateService {
    fetchStates() {
        return __awaiter(this, void 0, void 0, function* () {
            // find_states_and_sort_them_alphabetically_by_name_in_ascending_order
            const states = yield entity_1.default.find().sort({ name: 1 });
            ;
            return states;
        });
    }
    fetchStateDetail(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const stateDetail = yield entity_2.default.findOne({ id });
            return stateDetail;
        });
    }
    uploadStateData(stateDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = stateDetails.id;
            const name = stateDetails.name;
            const region = stateDetails.region;
            const capital = stateDetails.capital;
            const slogan = stateDetails.slogan;
            const state = new entity_1.default({
                id,
                name,
                region,
                capital,
                slogan,
            });
            yield state.save();
            return state;
        });
    }
}
exports.stateService = new StateService();
