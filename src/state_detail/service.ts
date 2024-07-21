import { IStateDataDetail } from "./interface";
import StateDetail from "./entity";

class StateDetailService {
  public async uploadStateDetailData(stateDetails: IStateDataDetail) {
    const id = stateDetails.id;
    const lgas = stateDetails.lgas;
    const neighbours = stateDetails.neighbours;
    const towns = stateDetails.towns;

    const state = new StateDetail({
      id,
      lgas,
      neighbours,
      towns,
    });

    await state.save();

    return state;
  }

}

export const stateDetailService = new StateDetailService();
