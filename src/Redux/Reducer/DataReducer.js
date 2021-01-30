import {
  GET_ALL_DATA,
  FILTER_DATA,
  FILL_FILTER_DATA,
  DATA_ERROR,
  ISLOADING,
  GET_SINGLE_DATA,
  SET_SINGLE_DATA,
} from "../Actions/DataActions";

const initialState = {
  data: [],
  filterData: [],
  singleData: {},
  loading: false,
  error: [],
};

export const DataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DATA:
      return {
        ...state,
        data: [...payload],
        loading: false,
        error: [],
      };

    case FILTER_DATA:
      let sortedResult = [];

      if (payload.type === "input") {
        sortedResult.push(
          ...state.data.filter(item =>
            item.name.toLowerCase().includes(payload.data.toLowerCase())
          )
        );
      } else if (payload.type === "select") {
        sortedResult = [
          ...state.data.filter(
            item => item.region.toLowerCase() === payload.data.toLowerCase()
          ),
        ];
      } else if (payload.type === "initial") {
        sortedResult = [...state.data];
      }

      return {
        ...state,
        filterData: [...sortedResult],
      };

    case FILL_FILTER_DATA:
      return {
        ...state,
        filterData: [...state.data],
      };

    case GET_SINGLE_DATA:
      return {
        ...state,
        singleData: {
          ...state.data.find(item => item.alpha3Code == payload),
        },
      };

    case SET_SINGLE_DATA:
      return {
        ...state,
        singleData: { ...payload },
      };

    case ISLOADING:
      return {
        ...state,
        loading: true,
        error: [],
      };

    case DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: [payload],
      };

    default:
      return state;
  }
};
