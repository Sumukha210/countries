import {
  GET__UNIVERSITIES,
  UNIVERSITY__ERROR,
  UNIVERSITY__LOADING,
} from "../Actions/UnivertiesAction";

const initalState = {
  data: [],
  error: "",
  loading: false,
};

export const UniversityReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET__UNIVERSITIES:
      return {
        data: [...payload],
        error: "",
        loading: false,
      };

    case UNIVERSITY__LOADING:
      return {
        ...state,
        error: "",
        loading: true,
      };

    case UNIVERSITY__ERROR:
      return {
        data: [],
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};
