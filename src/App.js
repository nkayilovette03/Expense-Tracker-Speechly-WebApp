import React, { useRef, useEffect } from "react";
import { Grid } from "@material-ui/core";

import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from "@speechly/react-ui";
import { SpeechState, useSpeechContext } from "@speechly/react-client";

import Main from "./components/Main/Main";
import Details from "./components/Details/Details";

import useStyles from "./styles";

// const func = () => {
//   var context = new AudioContext();

//   context.resume().then(() => {
//     console.log("PlayBack resumed successfully");
//   });
// };

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={2} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={2} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      {/* <button onClick={func}>test</button> */}
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
