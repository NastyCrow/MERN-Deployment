import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Grid, Paper, Box } from "@material-ui/core";

const Pirate = () => {
  const [pirate, setPirate] = useState({
    name: "",
    treasures: 0,
    catch_phrase: "",
    position: "",
    peg_leg: true,
    eye_patch: true,
    hook_hand: true,
  });

  const [pirateUpdated, setPirateUpdated] = useState(false);
  const { pirateId } = useParams();
  useEffect(() => {
    axios.get("http://localhost:8080/api/pirates/" + pirateId).then((res) => {
      console.log(pirate);
      setPirate(res.data);
    });
  }, []);

  function handleChange(event) {
    setPirate({
      ...pirate,
      [event.target.name]: !pirate[event.target.name],
    });
    setPirateUpdated(false);
    axios
      .put("http://localhost:8080/api/pirates/" + pirate._id, pirate)
      .then((res) => {
        setPirateUpdated(true);
      })
      .catch((err) => {
        console.log("could not updated the data");
      });
  }
  return (
    <div>
      {pirateUpdated && (
        <div className="ms-5 alert alert-success w-50 d-flex flex-column">
          the Pirate Information has been updated
        </div>
      )}
      <Grid container alignItems="top" justifyContent="center" spacing={12}>
        <Grid
          item
          xs={4}
          md={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="ms-3 me-3"
        >
          <Paper
            variant="outlined"
            elevation={1}
            className="d-flex flex-column"
          >
            <img src={pirate.img} width="100%" height="100%" alt="" />
            <div>
              <h3 className="display-1 text-center m-5">
                "{pirate.catch_phrase}"
              </h3>
            </div>
          </Paper>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="ms-3 me-3"
        >
          <Paper variant="outlined" className="d-flex flex-column">
            <h1 className="display-3 text-center mb-5">About</h1>
            <div className="ms-5">
              <div className="row mb-3">
                <div className="col-6">
                  <h5> Position</h5>
                </div>
                <div className="col-6">
                  <h5>{pirate.position}</h5>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <h5> Treasures</h5>
                </div>
                <div className="col-6">
                  <h5>{pirate.treasures}</h5>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <h5>Peg Leg</h5>
                </div>
                <div className="col-6">
                  {pirate.peg_leg ? (
                    <h5>
                      <button
                        onClick={(e) => {
                          handleChange(e);
                        }}
                        className="btn btn-success"
                        name="peg_leg"
                      >
                        Yes
                      </button>
                    </h5>
                  ) : (
                    <h5>
                      <button
                        onClick={(e) => {
                          handleChange(e);
                        }}
                        className="btn btn-danger"
                        name="peg_leg"
                      >
                        No
                      </button>
                    </h5>
                  )}
                </div>
              </div>
              <div className="row mb-3 ">
                <div className="col-6">
                  <h5>Eye Patch</h5>
                </div>
                <div className="col-6">
                  {pirate.eye_patch ? (
                    <h5>
                      <button
                        onClick={(e) => {
                          handleChange(e);
                        }}
                        className="btn btn-success"
                        name="eye_patch"
                      >
                        Yes
                      </button>
                    </h5>
                  ) : (
                    <h5>
                      <button
                        onClick={(e) => {
                          handleChange(e);
                        }}
                        className="btn btn-danger"
                        name="eye_patch"
                      >
                        No
                      </button>
                    </h5>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <h5>Hook Hand</h5>
                </div>
                <div className="col-6">
                  {pirate.hook_hand ? (
                    <h5>
                      <button
                        onClick={(e) => {
                          handleChange(e);
                        }}
                        className="btn btn-success"
                        name="hook_hand"
                      >
                        Yes
                      </button>
                    </h5>
                  ) : (
                    <h5>
                      <button
                        onClick={(e) => {
                          handleChange(e);
                        }}
                        className="btn btn-danger"
                        name="hook_hand"
                      >
                        No
                      </button>
                    </h5>
                  )}
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Pirate;
