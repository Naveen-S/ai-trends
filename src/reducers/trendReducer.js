import {
  TREND_CHANGE_FROM,
  TREND_CHANGE_TO,
  TREND_DATAPOINT_REQUEST,
  TREND_DATAPOINT_SUCCESS,
  TREND_FROM_TO_REQUEST,
  TREND_FROM_TO_SUCCESS,
} from '../actions/types';
import { showError } from '../utils/utils_toast';

export const trendReducer = (
  state = { fromTo: [], dataPoints: [], from: '', to: '' },
  action
) => {
  switch (action.type) {
    case TREND_FROM_TO_REQUEST: {
      return {
        ...state,
        loading: true,
        fromTo: [],
      };
    }
    case TREND_FROM_TO_SUCCESS: {
      return {
        ...state,
        loading: false,
        fromTo: action.payload,
      };
    }
    case TREND_DATAPOINT_REQUEST: {
      return {
        ...state,
        datapointLoading: true,
      };
    }

    case TREND_DATAPOINT_SUCCESS: {
      return {
        ...state,
        dataPointLoading: false,
        dataPoints: action.payload,
      };
    }

    case TREND_CHANGE_FROM: {
      console.log(action);
      if (state.to && action.payload > state.to) {
        showError("From can't be after To, duh!");
        return { ...state, from: '' };
      } else {
        const from = action.payload;
        const to = state.to || state.fromTo[state.fromTo.length - 1];
        let newDataPoints = [...state.dataPoints].filter((dp) => {
          let year = new Date(dp.x).getFullYear();
          if (year >= from && year <= to) {
            return true;
          } else {
            return false;
          }
        });
        return {
          ...state,
          from: action.payload,
          dataPoints: [...newDataPoints],
        };
      }
    }

    case TREND_CHANGE_TO: {
      if (state.from && action.payload < state.from) {
        showError("To can't be before From, duh!");
        return { ...state, to: '' };
      } else {
        console.log(state.dataPoints);
        const from = state.from || state.fromTo[0];
        const to = action.payload;
        console.log('from', from);
        console.log('to ', to);
        let newDataPoints = [...state.dataPoints].filter((dp) => {
          let year = new Date(dp.x).getFullYear();
          if (year >= from && year <= to) {
            return true;
          } else {
            return false;
          }
        });
        console.log(newDataPoints);
        return {
          ...state,
          to: action.payload,
          dataPoints: [...newDataPoints],
        };
      }
    }

    default: {
      return state;
    }
  }
};
