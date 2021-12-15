// import { Button } from "bootstrap";
import { Button } from "@material-ui/core";
import React from "react";

const Download = () => {
  return (
    <div>
      <Button
        href="https://drive.google.com/file/d/11G8GMOSkFBWitjFMfz-ErR-h-XixeLGs/view?usp=sharing"
        target="_blank"
        variant="contained"
        size="large"
        color="primary"
      >
        Download Resume
      </Button>
    </div>
  );
};

export default Download;
