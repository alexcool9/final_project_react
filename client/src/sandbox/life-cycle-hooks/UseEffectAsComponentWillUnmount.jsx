import { useEffect } from "react";
import { getTime } from "./utils";
import { Box, Button, Container } from "@mui/material";

const UseEffectAsComponentWillUnmount = () => {
  useEffect(() => {
    return () => { };
  }, []);

  return <div></div>
};

export default UseEffectAsComponentWillUnmount;
