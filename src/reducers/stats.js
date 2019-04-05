import { RECEIVE_DATA } from "../actions";

export default function stats(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.stats;
    default:
      return state;
  }
}
