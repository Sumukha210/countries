import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {
  getSingleData__fun,
  setSingleData__fun,
} from "../../../Redux/Actions/DataActions";
import Info from "./Info";
import UniversityInfo from "./UniversityInfo";
import {
  getUniversities__Api,
  getUniversities__fun,
} from "../../../Redux/Actions/UnivertiesAction";
import CustomSpinner from "../../common/CustomSpinner";

const SpecificCountry = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const country = useSelector(({ DataReducer: { singleData } }) => singleData);
  const universities = useSelector(({ UniversityReducer: { data } }) => data);
  const universities__loading = useSelector(
    ({ UniversityReducer: { loading } }) => loading
  );

  //related to fetching single country starts
  useEffect(() => {
    const getSessionData = sessionStorage.getItem("singleCountry");

    if (getSessionData && JSON.parse(getSessionData).name) {
      dispatch(setSingleData__fun(JSON.parse(getSessionData)));
    } else {
      dispatch(getSingleData__fun(id));
    }

    return () => {
      sessionStorage.removeItem("singleCountry");
      dispatch(setSingleData__fun({}));
    };
  }, []);

  useEffect(() => {
    sessionStorage.setItem("singleCountry", JSON.stringify(country));
  }, [universities]);
  //related to fetching single country ends

  //related to fetching universities starts
  useEffect(() => {
    const getSessionData = sessionStorage.getItem("university");
    console.log("country name is", country.name);
    if (getSessionData && JSON.parse(getSessionData).name) {
      dispatch(getUniversities__fun(JSON.parse(getSessionData)));
    } else {
      country.name && dispatch(getUniversities__Api(country.name));
    }

    return () => {
      dispatch(getUniversities__fun([]));
      sessionStorage.removeItem("university");
    };
  }, [country.name]);

  useEffect(() => {
    sessionStorage.setItem("university", JSON.stringify(universities));
  }, [universities]);
  //related to fetching universitites ends

  const check = item => (country[item] ? country[item] : "unknown");

  const handleMapBtn = () => {
    history.push(`/map/${[country.latlng]}`);
  };

  return (
    <div className="specificPage">
      <Row className="align-items-center justify-content-center ">
        <Col md={8} lg={6}>
          <img src={check("flag")} className="img-fluid mb-3" alt="" />
        </Col>

        <Col md={8} lg={6}>
          <h4 className="specificPage__title mb-4">{check("name")}</h4>

          <Row className="justify-content-around">
            <Col lg={6}>
              <Info title="native name" info={check("nativeName")} />
              <Info title="Population" info={check("population")} />
              <Info title="region" info={check("region")} />
              <Info title="region" info={check("subregion")} />
              <Info title="capital" info={check("capital")} />
            </Col>

            <Col lg={6}>
              <Info title="alpha Code" info={check("alpha3Code")} />
              <Info title="languages" info={check("languages")} />
              <Info title="currencies" info={check("currencies")} />
              <Button
                variant="info"
                className="font-weight-bold"
                onClick={handleMapBtn}>
                <i className="fas fa-map-marked-alt"></i>
                <span className="ml-3"> View on map</span>
              </Button>
            </Col>
          </Row>
          <div className="mt-3">
            <Info title="border countries" info={check("borders")} />
          </div>
        </Col>
      </Row>

      <div className="university mt-5">
        <h1 className="university__title mb-3">Universities:-</h1>

        {universities__loading && <CustomSpinner />}

        <UniversityInfo />
      </div>
    </div>
  );
};

export default SpecificCountry;
