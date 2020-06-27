import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

import artikel from "../../images/article.png";
import event from "../../images/calendar.png";
import donasi from "../../images/money.png";
import video from "../../images/video.png";
import jualan from "../../images/shopping-bag.png";
import chat from "../../images/message.png";

export default function Registrasi() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.body}>
        <Container maxWidth="xs" className={classes.bungkus}>
          <Typography variant="h5" component="h1" className={classes.title}>
            Selamat Datang!
          </Typography>

          {/*----------- Menu Baris ke 1 -----------*/}
          <Grid container className={classes.bungkus}>
            {/*----------- Menu artikel -----------*/}
            <a
              className={classes.decoration}
              href="https://muslimgoonline.com/yuk-ngaji/artikel"
            >
              <img className={classes.gambar} src={artikel} alt="Event" />
              <Typography variant="h5" component="h1" className={classes.title}>
                Event
              </Typography>
            </a>

            {/*----------- Menu Event -----------*/}
            <a
              className={classes.decoration}
              href="https://muslimgoonline.com/yuk-ngaji/event"
            >
              <img className={classes.gambar} src={event} alt="Event" />
              <Typography variant="h5" component="h1" className={classes.title}>
                Event
              </Typography>
            </a>
          </Grid>

          {/*----------- Menu Baris ke 2 -----------*/}
          <Grid container className={classes.button}>
            {/*----------- Menu Donasi -----------*/}
            <a
              className={classes.decoration}
              href="https://muslimgoonline.com/yuk-ngaji/donasi"
            >
              <img className={classes.gambar} src={donasi} alt="Donasi" />
              <Typography variant="h5" component="h1" className={classes.title}>
                Donasi
              </Typography>
            </a>

            {/*----------- Menu Video -----------*/}
            <a
              className={classes.decoration}
              href="https://muslimgoonline.com/yuk-ngaji/video"
            >
              <img className={classes.gambar} src={video} alt="Video" />
              <Typography variant="h5" component="h1" className={classes.title}>
                Video
              </Typography>
            </a>

            {/*----------- Menu Baris ke 3 -----------*/}
            <Grid container className={classes.button}>
              {/*----------- Menu Jualan -----------*/}
              <a
                className={classes.decoration}
                href="https://muslimgoonline.com/yuk-ngaji/donasi"
              >
                <img className={classes.gambar} src={jualan} alt="Jualan" />
                <Typography
                  variant="h5"
                  component="h1"
                  className={classes.title}
                >
                  Jualan
                </Typography>
              </a>

              {/*----------- Menu Chat -----------*/}
              <a
                className={classes.decoration}
                href="https://muslimgoonline.com/yuk-ngaji/group-chat/"
              >
                <img className={classes.gambar} src={chat} alt="grup" />
                <Typography
                  variant="h5"
                  component="h1"
                  className={classes.title}
                >
                  Chat
                </Typography>
              </a>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
