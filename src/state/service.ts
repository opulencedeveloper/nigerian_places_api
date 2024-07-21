import { IStateData } from "./interface";
import State from "./entity";

class StateService {
  public async fetchStates() {
    const states = await State.find();

    return states;
  }

  public async fetchStateDetail(id: string) {
    const stateDetail = await State.findOne({id});

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
