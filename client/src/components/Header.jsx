import { Paper } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Paper variant="squire" elevation={5} style={{ backgroundColor: "#783f04" }} className="mb-3 pt-3">
      <div
        className="d-flex align-items-center justify-content-center mb-5"
        style={{ backgroundColor: "#783f04" }}
      >
        <h1 className="display-1 text-white mb-3">{props.text}</h1>
        {props.btnText ? (
          <div className="position-absolute top-0 end-0 me-5 mt-5">
            <Link className="btn btn-primary" to={{ pathname: props.btnLink }}>
              {props.btnText}
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </Paper>
  );
};

export default Header;
