export const RECEIVE_DATA = "RECEIVE_DATA";
export const CHANGE_COLOR = "CHANGE_COLOR";

export function receiveDataAction(name) {
  let url = "https://lichess.org/api/user/";
  if (name === "Anan") url += "ananma";
  else if (name === "Magnus") url += "drdrunkenstein";
  return dispatch => {
    fetch(url)
      .then(result => result.json(result))
      .then(result => {
        dispatch(receiveData(result.username, result.perfs));
      });
  };
}

export function receiveInitialDataAction() {
  let url = "https://lichess.org/api/user/ananma";
  return dispatch => {
    fetch(url)
      .then(result => result.json(result))
      .then(result => {
        dispatch(receiveData(result.username, result.perfs));
      });
  };
}

function receiveData(profile, stats) {
  return {
    type: RECEIVE_DATA,
    profile: profile,
    stats: stats
  };
}

export function changeBGColor(color) {
  return {
    type: CHANGE_COLOR,
    color: color
  };
}
