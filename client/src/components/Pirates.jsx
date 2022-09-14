import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { Paper, Grid, Button, Box } from "@material-ui/core";

const Pirates = () => {
  const [pirates, setPirates] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/pirates")
      .then((res) => {
        setPirates(res.data.records);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log("Could not fetch the Pirates");
      });
  }, []);

  function handleDelete(id) {
    axios.delete("http://localhost:8080/api/pirates/" + id).then(
      (res) => {
        const filteredPirates = pirates.filter((p,i) => p._id !== id);
        console.log(filteredPirates);
        setPirates([...filteredPirates]);
      }
    ).catch(err => {
      const data = err.response.data;
      console.log(data);
    })
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      {isLoaded &&
        pirates.map((pirate, i) => {
          return (
            <Grid item key={i} style={{maxWidth:"2000px"}}>
              <Paper elevation={3} key={i}>
                <div className="d-flex align-items-center">
                  <img className="col-4" src={pirate.img} height="100%" alt="No Pic" />
                  <div className="col-8 d-flex justify-content-center">
                    <div className="d-flex flex-column text-center ">
                      <h1 className="display-2">{pirate.name}</h1>
                      <div>
                        <Link className="btn btn-primary m-2 fs-3" to={{ pathname: `/pirates/${pirate._id}` }}>View Pirates</Link>
                        <button onClick={(e) => { handleDelete(pirate._id) }} className="btn btn-danger m-2 fs-3">Walk the plank</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Pirates;
