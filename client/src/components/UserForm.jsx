import { Paper, Grid, Button, Box } from "@material-ui/core";

const UserForm = (props) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    handleChange,
    handleSubmit,
  } = props;
  return (
    <Paper elevation={3}>
      <h1 className="text-center">Register</h1>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div className="row mb-2">
              <label className="col-2 form-label">First Name:</label>
              <div className="col-6">
                <input
                  className="form-control"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="row mb-2">
              <label className="col-2 form-label">Last Name:</label>
              <div className="col-6">
                <input
                  className="form-control"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="row mb-2">
              <label className="col-2 form-label ">Email:</label>
              <div className="col-6">
                <input
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="row mb-2">
              <label className="col-2 form-label ">Password:</label>
              <div className="col-6">
                <input
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="row mb-2">
              <label className="col-2 form-label">confirm Password:</label>
              <div className="col-6">
                <input
                  className="form-control"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center" AlignSelf="center">
              <Button variant="contained" color="primary">Register</Button>
              {/* <button type="submit" >Submit Form</button> */}
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default UserForm;
