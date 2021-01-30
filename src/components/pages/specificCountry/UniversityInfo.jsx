import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const UniversityInfo = () => {
  const universities = useSelector(({ UniversityReducer: { data } }) => data);

  console.log(universities);

  return (
    <div className="mt-2">
      {universities.length ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>name</th>
              <th>Alpha2 code</th>
              <th>domains</th>
              <th>Web page</th>
            </tr>
          </thead>
          <tbody>
            {universities
              .sort((a, b) => a.name.charCodeAt() - b.name.charCodeAt())
              .map(({ name, alpha_two_code, domains, web_pages }, i) => (
                <tr key={i}>
                  <td>{name}</td>
                  <td>{alpha_two_code}</td>
                  <td>{domains}</td>
                  <td>{web_pages}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <h3 className="text-center message">Unknown</h3>
      )}
    </div>
  );
};

export default UniversityInfo;
