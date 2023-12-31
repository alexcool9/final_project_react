import { useEffect, useState } from "react";
import { getTime } from "./utils";
import { Box, Button, Container } from "@mui/material";

const UseEffectAsComponentUpdateNoDeps = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
  });

  return (
    <>
      <Container>
        <Box>Count: {count}</Box>
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setCount((prev) => prev - 1)}
          >
            -
          </Button>
        </div>
      </Container>
      <Container>
        <Box>Num: {num}</Box>
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setNum((prev) => prev + 1)}
          >
            +
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setNum((prev) => prev - 1)}
          >
            -
          </Button>
        </div>
      </Container>
    </>
  );
};

export default UseEffectAsComponentUpdateNoDeps;
