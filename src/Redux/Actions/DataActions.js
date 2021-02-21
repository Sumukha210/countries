import axios from "axios";

//related to fetching countries
export const GET_ALL_DATA = "GET_ALL_DATA";
export const GET_SINGLE_DATA = "GET_SINGLE_DATA";
export const SET_SINGLE_DATA = "SET_SINGLE_DATA";
export const FILTER_DATA = "FILTER_DATA";
export const FILL_FILTER_DATA = "FILL_FILTER_DATA";
export const DATA_ERROR = "DATA_ERROR";
export const ISLOADING = "ISLOADING";

export const getAllData__fun = payload => ({ type: GET_ALL_DATA, payload });

export const getSingleData__fun = payload => ({
  type: GET_SINGLE_DATA,
  payload,
});

export const setSingleData__fun = payload => ({
  type: SET_SINGLE_DATA,
  payload,
});

export const filterData__fun = (type, data) => ({
  type: FILTER_DATA,
  payload: { type, data },
});

export const fillFilterData__fun = () => ({
  type: FILL_FILTER_DATA,
});

export const isLoading__fun = () => ({ type: ISLOADING });

export const error__fun = payload => ({ type: DATA_ERROR, payload });

export const getAllData__api = () => async dispatch => {
  dispatch(isLoading__fun());
  try {
    const { data } = await axios.get(`https://restcountries.eu/rest/v2/all`);
    dispatch(getAllData__fun(data));
  } catch (error) {
    dispatch(error__fun(error));
  }
};
