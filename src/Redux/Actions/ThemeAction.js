export const THEME = "THEME";
export const SET__THEME = "SET__THEME";

export const changeTheme = () => ({ type: THEME });

export const setTheme = payload => ({ type: SET__THEME, payload });
