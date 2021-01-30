import axios from "axios";

//related to fetching univerties
export const GET__UNIVERSITIES = "GET__UNIVERSITIES";
export const UNIVERSITY__LOADING = "UNIVERSITY__LOADING";
export const UNIVERSITY__ERROR = "UNIVERSITY__ERROR";

export const getUniversities__fun = payload => ({
  type: GET__UNIVERSITIES,
  payload,
});

export const getUniversities_loading_fun = () => ({
  type: UNIVERSITY__LOADING,
});

export const getUniversities_error_fun = payload => ({
  type: UNIVERSITY__ERROR,
  payload,
});

export const getUniversities__Api = countryName => async dispatch => {
  dispatch(getUniversities_loading_fun());

  try {
    const { data } = await axios.get(
      `http://universities.hipolabs.com/search?country=${countryName}`
    );

    console.log(data);

    data.length
      ? dispatch(getUniversities__fun(data))
      : dispatch(getUniversities_error_fun("Unknown"));
  } catch (error) {
    dispatch(getUniversities_error_fun(error));
  }
};
