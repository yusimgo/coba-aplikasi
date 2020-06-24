import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

import isEmail from "validator/lib/isEmail";

import { auth, useFirebase } from "../../components/FirebaseProvider";

import { Link, Redirect } from "react-router-dom";

export default function Login() {
  const classes = useStyles();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState({});

  const [isSubmitting, setSubmitting] = useState(false);

  const { user } = useFirebase();

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.email) {
      newErrors.email = "Email wajib diisi";
    } else if (!isEmail(form.email)) {
      newErrors.email = "Email tidak valid";
    }

    if (!form.password) {
      newErrors.password = "Password wajib diisi";
    }

    return newErrors;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const findErrors = validate();
    if (Object.values(findErrors).some(message => message !== "")) {
      setError(findErrors);
    } else {
      setSubmitting(true);
      try {
        await auth.signInWithEmailAndPassword(form.email, form.password);
      } catch (e) {
        let newError = {};
        switch (e.code) {
          case "auth/user-not-found":
            newError.email = "Email tidak terdaftar";
            break;

          case "auth/invalid-email":
            newError.email = "Email tidak valid";
            break;

          case "auth/wrong-password":
            newError.password = "Password salah";
            break;

          case "auth/user-disabled":
            newError.email = "Pengguna di blokir";
            break;

          default:
            newError.email = "Terjadi kesalahan silahkan coba lagi";
            break;
        }

        setError(newError);
      }
      setSubmitting(false);
    }
  };

  if (user) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <div className={classes.daftarBlock}>
        <div className={classes.daftarBox}>
          <div className={classes.logoBox}>{/* untuk logo */}</div>
          <Container maxWidth="xs">
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h1" className={classes.title}>
                Login
              </Typography>
              <form onSubmit={handleSubmit} noValidate>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                  value={form.email}
                  onChange={handleChange}
                  error={error.email ? true : false}
                  helperText={error.email}
                  disable={isSubmitting}
                />
                <TextField
                  id="password"
                  type="password"
                  name="password"
                  label="Password"
                  autoComplete="new-passwor d"
                  margin="normal"
                  fullWidth
                  required
                  variant="outlined"
                  value={form.password}
                  onChange={handleChange}
                  error={error.password ? true : false}
                  helperText={error.password}
                  disable={isSubmitting}
                />
                <Grid container className={classes.button}>
                  <Grid item xs>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      size="large"
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      component={Link}
                      variant="contained"
                      size="large"
                      to="/registrasi"
                    >
                      Daftar
                    </Button>
                  </Grid>
                </Grid>
                <div className={classes.forgetPassword}>
                  <Typography component={Link} to="/lupa-password">
                    Lupa Password?
                  </Typography>
                </div>
              </form>
            </Paper>
          </Container>
        </div>
      </div>
    </>
  );
}
