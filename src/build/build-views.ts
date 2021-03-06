import fs from "fs";
import path from "path";
import { promisify } from "util";
import { renderToStaticMarkup } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import { html } from "./html";

const writeFilePromise = promisify(fs.writeFile);
const accessPromise = promisify(fs.access);
const mkdirPromise = promisify(fs.mkdir);
const accessOrCreateDirectory = (dir: fs.PathLike) =>
  new Promise(resolve => {
    accessPromise(dir)
      .then(resolve)
      .catch(() => mkdirPromise(dir, { recursive: true }));
  });
const PATH_DIST = path.resolve(__dirname, "../../dist/pages");

export async function buildPage(bodyElement: JSX.Element, path: string) {
  const sheet = new ServerStyleSheet();
  const body = renderToStaticMarkup(sheet.collectStyles(bodyElement));
  // FIXME
  const styles = `
    <style amp-custom>
    ${sheet
      .getStyleTags()
      .replace(/<.+?>/g, "")
      .replace(/\/\*.+?\*\//g, "")
      .replace(/\r?\n/g, "")}
    </style>
    `;
  // @ts-ignore
  await accessOrCreateDirectory(PATH_DIST);
  await writeFilePromise(`${PATH_DIST}/${path}.html`, html({ body, styles }));
}
