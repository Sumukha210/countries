import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import CustomCard from "../../../common/CustomCard";
import { filterData__fun } from "../../../../Redux/Actions/DataActions";

const DisplayCountries = () => {
  const filterCountries = useSelector(
    ({ DataReducer: { filterData } }) => filterData
  );
  const originalCountries = useSelector(({ DataReducer: { data } }) => data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterData__fun("initial"));
  }, [originalCountries]);

  return (
    <div className="mt-3">
      <Row className="align-items-center ">
        {filterCountries.length
          ? filterCountries.map(
              ({ alpha3Code, name, region, population, flag, capital }) => (
                <CustomCard
                  key={alpha3Code}
                  alpha3Code={alpha3Code}
                  name={name}
                  region={region}
                  population={population}
                  img={flag}
                  capital={capital}
                />
              )
            )
          : ""}
      </Row>
    </div>
  );
};

export default DisplayCountries;
