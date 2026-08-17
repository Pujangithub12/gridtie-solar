import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { routes } from "./routes-seo.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
const { render } = await import(
  pathToFileURL(path.join(distDir, "server", "entry-server.js")).href
);

for (const route of routes) {
  const appHtml = render(route.path);

  let html = template.replace("<!--ssr-outlet-->", appHtml);

  html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  html = html.replace(
    /(<meta name="description" content=")[^"]*(")/,
    `$1${route.description}$2`
  );
  html = html.replace(
    /(<meta property="og:title" content=")[^"]*(")/,
    `$1${route.title}$2`
  );
  html = html.replace(
    /(<meta property="og:description" content=")[^"]*(")/,
    `$1${route.description}$2`
  );
  html = html.replace(
    /(<meta name="twitter:title" content=")[^"]*(")/,
    `$1${route.title}$2`
  );
  html = html.replace(
    /(<meta name="twitter:description" content=")[^"]*(")/,
    `$1${route.description}$2`
  );
  html = html.replace(
    /(<link rel="canonical" href=")[^"]*(")/,
    `$1https://gridtiesolar.com.np${route.path}$2`
  );
  html = html.replace(
    /(<meta property="og:url" content=")[^"]*(")/,
    `$1https://gridtiesolar.com.np${route.path}$2`
  );

  const outFile = path.join(distDir, route.file);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log(`Prerendered ${route.path} -> dist/${route.file}`);
}

fs.rmSync(path.join(distDir, "server"), { recursive: true, force: true });
console.log("Prerendering complete.");
