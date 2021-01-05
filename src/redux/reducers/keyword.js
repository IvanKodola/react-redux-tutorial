import { SET_KEYWORD } from "../actionTypes";

const keyword = (state = '', action) => {
  switch (action.type) {
    case SET_KEYWORD: {
      return action.payload.keyword;
    }
    default: {
      return state;
    }
  }
};

export default keyword;
