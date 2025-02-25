import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GameSelector from "./GameSelector";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GameSelector />
  </StrictMode>
);
