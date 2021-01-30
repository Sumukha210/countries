import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";

const CustomCard = ({ img, population, region, capital, name, alpha3Code }) => {
  const history = useHistory();

  return (
    <Col
      md={4}
      xl={3}
      sm={6}
      xs={12}
      onClick={() => history.push(`/specificCountry/${alpha3Code}`)}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="my-2 font-weight-bold mr-2">
            {name && name.length > 14 ? `${name.slice(0, 14)}...` : name}
          </Card.Title>
          <Card.Text className="mb-0 mt-3">
            <span className="font-weight-bold mr-2  text-capitalize">
              population:-
            </span>
            <span className="font-weight-normal">{population}</span>
          </Card.Text>

          <Card.Text className="mb-0">
            <span className="font-weight-bold mr-2  text-capitalize">
              region:-
            </span>
            <span className="font-weight-normal">{region}</span>
          </Card.Text>

          <Card.Text className="mb-0">
            <span className="font-weight-bold mr-2  text-capitalize">
              capital:-
            </span>
            <span className="font-weight-normal">{capital}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomCard;
