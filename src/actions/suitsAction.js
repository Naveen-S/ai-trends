import { suits } from '../utils/utils_data';
import { COLLECTION_REQUEST, COLLECTION_SUCCESS } from './types';

export const fetchSuits = () => (dispatch) => {
  dispatch({ type: COLLECTION_REQUEST });
  // Make api call and fetch data and then dispatch data.
  dispatch({
    type: COLLECTION_SUCCESS,
    payload: suits,
  });
};
