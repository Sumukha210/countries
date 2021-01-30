import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomSpinner from "./components/common/CustomSpinner";

import NavBar from "./components/common/NavBar";
import { getAllData__api, getAllData__fun } from "./Redux/Actions/DataActions";
const Home = lazy(() => import("./components/pages/Home"));
const MapPage = lazy(() => import("./components/pages/Map"));
const SpecificCountry = lazy(() =>
  import("./components/pages/specificCountry")
);

const App = () => {
  const dispatch = useDispatch();
  const countries = useSelector(({ DataReducer: { data } }) => data);
  const lightTheme = useSelector(
    ({ ThemeReducer: { lightTheme } }) => lightTheme
  );

  useEffect(() => {
    const getLocalData = localStorage.getItem("countriesInfo");

    if (getLocalData && JSON.parse(getLocalData).length) {
      dispatch(getAllData__fun(JSON.parse(getLocalData)));
    } else {
      dispatch(getAllData__api());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("countriesInfo", JSON.stringify(countries));
  }, [countries]);

  return (
    <div className={!lightTheme ? "app" : "app darkmode"}>
      <Router>
        <NavBar />
        <Switch>
          <Suspense fallback={<CustomSpinner />}>
            <Route exact component={Home} path="/" />
            <Route exact component={MapPage} path="/map" />
            <Route exact component={MapPage} path="/map/:latlng" />
            <Route
              exact
              component={SpecificCountry}
              path="/specificCountry/:id"
            />
          </Suspense>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
