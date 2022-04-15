const initialState = {
  results: null,
  chartsData: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RESULTS":
      return { results: action.data };
    case "GET_PS4_GAMES":
      return { results: action.data };

    case "GET_PS5_GAMES":
      return { results: action.data };

    case "GET_XBOX_GAMES":
      return { results: action.data };

    case "GET_PC_GAMES":
      return { results: action.data };
    case "GET_CHARTS_DATA":
      return { chartsData: action.data}
    default:
      return state;
  }
};

export default rootReducer;
