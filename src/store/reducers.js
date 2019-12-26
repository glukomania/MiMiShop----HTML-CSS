const initialState = {
  test: ``,
}

export const ActionCreator = {
  test: (lang) => ({
    type: `DO_SOMETHING`,
    payload: takeDataByLand(lang),
  }),
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `DO_SOMETHING`: return Object.assign({}, state, {
      test: action.payload,
    });
  };

  return state;
}
