import {
  TREND_CHANGE_FROM,
  TREND_CHANGE_TO,
  TREND_DATAPOINT_REQUEST,
  TREND_DATAPOINT_SUCCESS,
  TREND_FROM_TO_REQUEST,
  TREND_FROM_TO_SUCCESS,
} from '../actions/types';
import { fromAndToDates, generateDataPoints } from '../utils/utils_data';

export const fetchDates = () => (dispatch) => {
  dispatch({
    type: TREND_FROM_TO_REQUEST,
  });
  // Make API call here
  dispatch({
    type: TREND_FROM_TO_SUCCESS,
    payload: fromAndToDates,
  });
};

export const fetchDataPoints = () => (dispatch) => {
  dispatch({
    type: TREND_DATAPOINT_REQUEST,
  });
  dispatch({
    type: TREND_DATAPOINT_SUCCESS,
    payload: generateDataPoints(20),
  });
};

export const fromChanged = (from) => (dispatch, getState) => {
  // console.log(getState().trend.dataPoints);
  console.log(from);
  dispatch({
    type: TREND_CHANGE_FROM,
    payload: from,
  });
};

export const toChanged = (to) => (dispatch, getState) => {
  // console.log(getState().trend.dataPoints);
  console.log(to);
  dispatch({
    type: TREND_CHANGE_TO,
    payload: to,
  });
};
