import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Artikel from "../../images/article-white2.png";
import Event from "../../images/event-white2.png";
import Donasi from "../../images/donasi-white2.png";
import Jualan from "../../images/jualan-white2.png";
import Video from "../../images/video-white2.png";
import LiveVideo from "../../images/live-video-white2.png";

import Logo from "../../images/logo1.png";

import useStyles from "./styles";

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.body}>
        <div className={classes.bungkusUtama}>
          <Typography className={classes.textHallo}>Hallo!</Typography>
          <Typography className={classes.textSelamatDatang}>
            Selamat Datang di dalam Aplikasi Silaturahmi Kami
          </Typography>

          <div className={classes.bungkusMenuSatu}>
            <div className={classes.menuSatu}>
              {/* ------ menu Artikel ------ */}
              <a
                className={classes.decoration}
                href="https://muslimgoonline.com/yuk-ngaji/artikel"
              >
                <div className={classes.paper}>
                  <img className={classes.gambar} src={Artikel} alt="Artikel" />
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Artikel
                  </Typography>
                </div>
              </a>
            </div>
            <div className={classes.menuSatu}>
              {/* ------ menu Event ------ */}
              <a
                className={classes.decoration}
                href="https://muslimgoonline.com/yuk-ngaji/event"
              >
                <div className={classes.paper}>
                  <img className={classes.gambar} src={Event} alt="Event" />
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Event
                  </Typography>
                </div>
              </a>
            </div>
            <div className={classes.menuSatu}>
              {/* ------ menu Donasi ------ */}
              <a
                className={classes.decoration}
                href="https://muslimgoonline.com/yuk-ngaji/donasi"
              >
                <div className={classes.paper}>
                  <img className={classes.gambar} src={Donasi} alt="Donasi" />
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Donasi
                  </Typography>
                </div>
              </a>
            </div>
          </div>

          <div className={classes.bungkusMenuDua}>
            <div className={classes.menuDua}>
              {/* ------ menu Jualan ------ */}
              <a
                className={classes.decoration}
                href="https://muslimgoonline.com/yuk-ngaji/jualan"
              >
                <div className={classes.paper}>
                  <img className={classes.gambar} src={Jualan} alt="Jualan" />
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Jualan
                  </Typography>
                </div>
              </a>
            </div>
            <div className={classes.menuDua}>
              {/* ------ menu Video ------ */}
              <a
                className={classes.decoration}
                href="https://muslimgoonline.com/yuk-ngaji/video"
              >
                <div className={classes.paper}>
                  <img className={classes.gambar} src={Video} alt="Video" />
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Video
                  </Typography>
                </div>
              </a>
            </div>
            <div className={classes.menuDua}>
              {/* ------ menu Live Video ------ */}
              <a
                className={classes.decoration}
                href="https://muslimgoonline.com/yuk-ngaji/live-video"
              >
                <div className={classes.paper}>
                  <img
                    className={classes.gambar}
                    src={LiveVideo}
                    alt="LiveVideo"
                  />
                  <Typography
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    Live
                  </Typography>
                </div>
              </a>
            </div>
          </div>

          <img className={classes.logo} src={Logo} alt="Logo" />
        </div>
      </div>
    </React.Fragment>
  );
}
