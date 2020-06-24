import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function ChatList() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Halaman Chat</Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
