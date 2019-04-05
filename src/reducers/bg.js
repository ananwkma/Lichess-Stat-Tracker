import { CHANGE_COLOR } from "../actions";

export default function bg(state = {}, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return action.color;
    default:
      return state;
  }
}
