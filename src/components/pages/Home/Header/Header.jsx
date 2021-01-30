import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";

const Header = () => {
  return (
    <div className="Header">
      <Row className="align-items-center justify-content-between">
        <Col md={6} sm={12}>
          <SearchBar />
        </Col>
        <Col md={3} sm={6}>
          <DropDown />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
