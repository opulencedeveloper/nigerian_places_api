import { IStateData } from "./interface";
import State from "./entity";
import StateDetail from "../state_detail/entity";

class StateService {
  public async fetchStates() {
    // find_states_and_sort_them_alphabetically_by_name_in_ascending_order
    const states = await State.find().sort({ name: 1 });;

    return states;
  }

  public async fetchStateDetail(id: string) {
    const stateDetail = await StateDetail.findOne({id});

    return stateDetail;
  }

  public async uploadStateData(stateDetails: IStateData) {
    const id = stateDetails.id;
    const name = stateDetails.name;
    const region = stateDetails.region;
    const capital = stateDetails.capital;
    const slogan = stateDetails.slogan;

    const state = new State({
      id,
      name,
      region,
      capital,
      slogan,
    });

    await state.save();

    return state;
  }

  
}

export const stateService = new StateService();
