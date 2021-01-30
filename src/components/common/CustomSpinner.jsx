import React from "react";
import Spinner from "react-bootstrap/Spinner";

const CustomSpinner = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "90vh" }}>
      <Spinner
        animation="border"
        variant="info"
        style={{ height: 50, width: 50 }}
      />
    </div>
  );
};

export default CustomSpinner;
