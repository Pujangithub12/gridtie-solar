import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { AppShell } from "./App.jsx";

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>
  );
}
