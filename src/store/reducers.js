const initialState = {
  isSearchVisible: false,
}

export const ActionCreator = {
  openSearchModal: () => ({
    type: `OPEN_SEARCH`,
    payload: true,
  }),

  closeSearchModal: () => ({
    type: `CLOSE_SEARCH`,
    payload: false,
  }),
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `OPEN_SEARCH`: return Object.assign({}, state, {
      isSearchVisible: action.payload,
    });

    case `CLOSE_SEARCH`: return Object.assign({}, state, {
      isSearchVisible: action.payload,
    });

    default: 
      return state;
  };

  return state;
}
