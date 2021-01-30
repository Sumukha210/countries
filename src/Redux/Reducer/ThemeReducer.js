import { SET__THEME, THEME } from "../Actions/ThemeAction";

const initialState = {
  lightTheme: true,
};

export const ThemeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case THEME:
      return {
        lightTheme: !state.lightTheme,
      };

    case SET__THEME:
      return {
        lightTheme: payload,
      };

    default:
      return state;
  }
};
