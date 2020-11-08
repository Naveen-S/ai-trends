import { COLLECTION_REQUEST, COLLECTION_SUCCESS } from '../actions/types';

export const suitReducer = (state = { suits: [] }, action) => {
  switch (action.type) {
    case COLLECTION_REQUEST: {
      return {
        loading: true,
        suits: [],
      };
    }
    case COLLECTION_SUCCESS: {
      return {
        loading: false,
        suits: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
