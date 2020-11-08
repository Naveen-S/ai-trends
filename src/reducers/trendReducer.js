import {
  TREND_CHANGE_FROM,
  TREND_CHANGE_TO,
  TREND_DATAPOINT_REQUEST,
  TREND_DATAPOINT_SUCCESS,
  TREND_FROM_TO_REQUEST,
  TREND_FROM_TO_SUCCESS,
} from '../actions/types';
import { generateDataPoints } from '../utils/utils_data';
import { showError } from '../utils/utils_toast';

const initialDataPoints = generateDataPoints(20);

export const trendReducer = (
  state = { fromTo: [], dataPoints: initialDataPoints, from: '', to: '' },
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
      if (state.to && action.payload > state.to) {
        showError("From can't be after To, duh!");
        return { ...state, from: state.fromTo[0] };
      } else {
        const from = action.payload;
        const to = state.to || state.fromTo[state.fromTo.length - 1];
        let newDataPoints = [...initialDataPoints].filter((dp) => {
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
        return { ...state, to: state.fromTo[state.fromTo.length - 1] };
      } else {
        const from = state.from || state.fromTo[0];
        const to = action.payload;
        let newDataPoints = [...initialDataPoints].filter((dp) => {
          let year = new Date(dp.x).getFullYear();
          if (year >= from && year <= to) {
            return true;
          } else {
            return false;
          }
        });
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
