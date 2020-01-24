const initialState = {
  allProducts: [],
  isSearchVisible: false,
  selectedItems: [],
  userData: [],
}

export const ActionCreator = {
  saveAllProducts: (products) => ({
    type: `SAVE_ALL_PRODUCTS`,
    payload: products,
  }),

  openSearchModal: () => ({
    type: `OPEN_SEARCH`,
    payload: true,
  }),

  closeSearchModal: () => ({
    type: `CLOSE_SEARCH`,
    payload: false,
  }),

  addItem: (array, id) => ({
    type: `SELECT_ITEM`,
    payload: addItem(array, id),
  }),

  removeItem: (array, id) => ({
    type: `REMOVE_ITEM`,
    payload: removeItem(array, id),
  }), 

  setUserData: (userData) => ({
    type: `SET_USER_DATA`,
    payload: userData,
  })
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SAVE_ALL_PRODUCTS`: return Object.assign({}, state, {
      allProducts: action.payload,
    });

    case `OPEN_SEARCH`: return Object.assign({}, state, {
      isSearchVisible: action.payload,
    });

    case `CLOSE_SEARCH`: return Object.assign({}, state, {
      isSearchVisible: action.payload,
    });

    case `SELECT_ITEM`: return Object.assign({}, state, {
      selectedItems: action.payload,
    });

    case `REMOVE_ITEM`: return Object.assign({}, state, {
      selectedItems: action.payload,
    });

    case `SET_USER_DATA`: return Object.assign({}, state, {
      userData: action.payload,
    });

    default: 
      return state;
  };
}

const addItem = (array, value) => {
  const copyOfArray = [...array];
  if (!copyOfArray.find((item) => item === value)) {
    copyOfArray.push(value);
  }
  
  return copyOfArray;
}

const removeItem = (array, value) => {
  const copyOfArray = [...array];
  copyOfArray.splice(copyOfArray.findIndex((item) => item === value), 1);
  
  return copyOfArray;
}
