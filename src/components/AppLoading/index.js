import React from "react";

import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

function AppLoading() {
  const classes = useStyles();

  return (
    <Container className{classes.loadingBlock} maxWidth="xs">
    <div></div>
    </Container>
  )
}