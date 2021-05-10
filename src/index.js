import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="d6fb68b7-997c-44a8-9fe5-f7b40d60b75b" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
