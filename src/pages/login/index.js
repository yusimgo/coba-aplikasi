import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

export default function Login() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.daftarBlock}>
        <div className={classes.daftarBox}>
          <div className={classes.logoBox}>{/* untuk logo */}</div>
          <Container maxWidth="xs">
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h1" className={classes.title}>
                Buat Akun Baru
              </Typography>
              <form>
                <TextField
                  id="nama"
                  name="nama"
                  label="Nama"
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                />
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                />
                <TextField
                  id="notelp"
                  type="number"
                  name="notelp"
                  label="Notelp"
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                />
                <TextField
                  id="password"
                  type="password"
                  name="password"
                  label="Password"
                  autoComplete="new-password"
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                />
                <TextField
                  id="ulangi_password"
                  type="password"
                  name="ulangi_password"
                  label="Ulangi Password"
                  autoComplete="new-password"
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                />
                <Grid container className={classes.button}>
                  <Grid item xs>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      size="large"
                    >
                      Daftar
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      size="large"
                      disable={isSubmitting}
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Container>
        </div>
      </div>
    </>
  );
}
