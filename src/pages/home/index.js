/* import React from "react";

import useStyles from "./styles";

import MenuArtikel from "../../images/logo1.png";
import MenuDiskusi from "../../images/logo1.png";
import MenuDonasi from "../../images/logo1.png";

export default function Registrasi() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.daftarBlock}>
        <div classNmae={classes.menuBarisSatu}>
          <a href="https://muslimgoonline.com/yuk-ngaji/artikel">
            <img className={classes.logoBox} src={MenuArtikel} alt="" />
          </a>

          <a href="https://muslimgoonline.com/yuk-ngaji/event">
            <img className={classes.logoBox} src={MenuDiskusi} alt="" />
          </a>

          <a href="https://muslimgoonline.com/yuk-ngaji/donasi">
            <img className={classes.logoBox} src={MenuDonasi} alt="" />
          </a>

          <a href="https://muslimgoonline.com/yuk-ngaji/jualan">
            <img className={classes.logoBox} src={MenuArtikel} alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
 */

import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

export default function Registrasi() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.daftarBlock}>
        <div className={classes.daftarBox}>
          <div className={classes.logoBox}>{/* untuk logo */}</div>
          <Container maxWidth="xs">
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h1" className={classes.title}>
                Selamat Datang!
              </Typography>
              <Grid container className={classes.button}>
                <a href="https://muslimgoonline.com/yuk-ngaji/artikel">
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Artikel
                  </Typography>
                </a>
                <a href="https://muslimgoonline.com/yuk-ngaji/event">
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Event
                  </Typography>
                </a>
                <a href="https://muslimgoonline.com/yuk-ngaji/donasi">
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Donasi
                  </Typography>
                </a>
                <a href="https://muslimgoonline.com/yuk-ngaji/jualan">
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Jualan
                  </Typography>
                </a>
              </Grid>
            </Paper>
          </Container>
        </div>
      </div>
    </>
  );
}
