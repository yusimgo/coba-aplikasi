import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Artikel from "../../images/article.png";
import Event from "../../images/calendar.png";
import Donasi from "../../images/money.png";
import Video from "../../images/video.png";

import useStyles from "./styles";

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.backgroundImage}>
        <div className={classes.daftarBox}>
          <Container maxWidth="sm" className={classes.bungkusUtama}>
            <Typography
              className={classes.selamatDatang}
              variant="h5"
              component="h1"
            >
              Selamat Datang
            </Typography>
            <Grid container className={classes.bungkusGridUtama}>
              <Grid item xs className={classes.bungkusMenu}>
                <Paper className={classes.bungkusMenuPaper}>
                  <a
                    className={classes.decoration}
                    href="https://muslimgoonline.com/yuk-ngaji/artikel"
                  >
                    <img
                      className={classes.gambar}
                      src={Artikel}
                      alt="Artikel"
                    />
                    <Typography
                      variant="h5"
                      component="h1"
                      className={classes.title}
                    >
                      Artikel
                    </Typography>
                  </a>
                </Paper>
              </Grid>
              <Grid item xs className={classes.bungkusMenu}>
                <Paper className={classes.bungkusMenuPaper}>
                  <a
                    className={classes.decoration}
                    href="https://muslimgoonline.com/yuk-ngaji/event"
                  >
                    <img className={classes.gambar} src={Event} alt="Event" />
                    <Typography
                      variant="h5"
                      component="h1"
                      className={classes.title}
                    >
                      Event
                    </Typography>
                  </a>
                </Paper>
              </Grid>
            </Grid>

            <Grid container className={classes.bungkusGridUtama}>
              <Grid item xs className={classes.bungkusMenu}>
                <Paper className={classes.bungkusMenuPaper}>
                  <a
                    className={classes.decoration}
                    href="https://muslimgoonline.com/yuk-ngaji/donasi"
                  >
                    <img className={classes.gambar} src={Donasi} alt="Donasi" />
                    <Typography
                      variant="h5"
                      component="h1"
                      className={classes.title}
                    >
                      Donasi
                    </Typography>
                  </a>
                </Paper>
              </Grid>
              <Grid item xs className={classes.bungkusMenu}>
                <Paper className={classes.bungkusMenuPaper}>
                  <a
                    className={classes.decoration}
                    href="https://muslimgoonline.com/yuk-ngaji/event"
                  >
                    <img className={classes.gambar} src={Video} alt="Video" />
                    <Typography
                      variant="h5"
                      component="h1"
                      className={classes.title}
                    >
                      Video
                    </Typography>
                  </a>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
}
