import React from "react";
import GlobalStyle from "./GlobalStyle";
import { FeedPage } from "./Pages/Feed";

export default function App() {
  return (
    <div className="Discografia">
      <GlobalStyle />
      <FeedPage />
    </div>
  );
}
