import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegisterPage from "../components/RegisterPage";
import Pirates from "../components/Pirates";
import Pirate from "../components/Pirate";
import PirateForm from "../components/PirateForm";
import { Grid, Paper } from "@material-ui/core";
import Header from "../components/Header";

const Main = (props) => {
  return (
    <Grid >
      <Paper elevation={0} style={{ backgroundColor: "#ff9900" }}>
        <Routes className="MainPage d-flex flex-column">
          <Route
            exact
            path="/"
            element={
              // <>
              //   {" "}
              //   <Header
              //     text={"Pirate Crew"}
              //     btnText={"Add Pirate"}
              //     btnLink={"/pirates/new"}
              //   ></Header>
              <RegisterPage></RegisterPage>
              // </>
            }
          ></Route>
          <Route
            exact
            path="/pirates"
            element={
              <>
                {" "}
                <Header
                  text={"Pirate Crew"}
                  btnText={"Add Pirate"}
                  btnLink={"/pirates/new"}
                ></Header>
                <Pirates></Pirates>
              </>
            }
          ></Route>
          <Route
            exact
            path="/pirates/:pirateId"
            element={
              <>
                <Header text={"Pirate"}></Header>
                <Pirate></Pirate>
              </>
            }
          ></Route>
          <Route
            exact
            path="/pirates/new"
            element={
              <>
                <Header
                  text={"Add Pirate"}
                  btnText={"Crew Board"}
                  btnLink={"/pirates"}
                ></Header>
                <PirateForm></PirateForm>
              </>
            }
          ></Route>
        </Routes>
      </Paper>
    </Grid>
  );
};
export default Main;
