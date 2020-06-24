import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

import { Link } from "react-router-dom";

import isEmail from "validator/lib/isEmail";

import { auth } from "../../components/FirebaseProvider";

export default function LupaPassword() {
  const classes = useStyles();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState({});

  const [isSubmitting, setSubmitting] = useState(false);

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
        const actionCodeSettings = {
          url: `${window.location.origin}/login`
        };
        await auth.sendPasswordResetEmail(form.email, actionCodeSettings);

        console.log("link berhasil dikirim");
      } catch (e) {
        let newError = {};
        switch (e.code) {
          case "auth/user-not-found":
            newError.email = "Email tidak terdaftar";
            break;

          case "auth/invalid-email":
            newError.email = "Email tidak valid";
            break;

          default:
            newError.email = "Terjadi kesalahan, silahkan coba lagi";
            break;
        }

        setError(newError);
      }
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className={classes.daftarBlock}>
        <div className={classes.daftarBox}>
          <div className={classes.logoBox}>{/* untuk logo */}</div>
          <Container maxWidth="xs">
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h1" className={classes.title}>
                Lupa Password
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
                <Grid container className={classes.button}>
                  <Grid item xs>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      size="large"
                    >
                      Kirim
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      component={Link}
                      variant="contained"
                      size="large"
                      to="/login"
                    >
                      Login
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
