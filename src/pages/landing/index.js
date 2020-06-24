import React from "react";

import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

export default function Landing() {
  return <>
  <Button component={Link} to="/registrasi">
    Daftar
  </Button>

  <Button component={Link} to="/Login">
    Login
  </Button>
</>
}
