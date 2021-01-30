import React from "react";

const Info = ({ title, info }) => (
  <p className="text-capitalize info">
    <span
      className={`font-weight-bold left mr-2 ${
        title === "border countries" ? "pb-3 d-inline-block " : ""
      } `}>
      {title}:-
    </span>
    <span
      className={`text-secondary right ${
        title === "border countries" ? "d-flex flex-wrap" : ""
      } `}>
      {typeof info === "object"
        ? info.map((item, i) =>
            item.name ? (
              <span key={i} className="mr-2">
                {item.name},
              </span>
            ) : item.code ? (
              <span key={i} className="mr-2">
                {item.code}
              </span>
            ) : (
              <span key={i} className="borders mr-3 mb-3">
                {item}
              </span>
            )
          )
        : info
        ? info
        : "unknown"}
    </span>
  </p>
);

export default Info;
