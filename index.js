import { https } from "firebase-functions";
import admin from "firebase-admin";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./src/App";
import getFacts from "./src/facts";
import express from "express";
import fs from "fs";

const app = express();
admin.initializeApp()

const index = fs.readFileSync(__dirname + "/public/index.html", "utf8");

app.get("**", async (req, res) => {
  const titleRef = admin.firestore().doc("title/ZZrGGKXrZzIrGfAB5mcS").get();

  const title = (await titleRef).data().title;
  const description = (await titleRef).data().description;
  const image = (await titleRef).data().image;

  console.log(title, description, image)
  getFacts().then((facts) => {
    const html = renderToString(<App facts={facts} />);

    const finalHtml = index
      .replace("<!--APP-->", html)
      .replace("<title>$OG_TITLE</title>", title)
      .replace("$OG_TITLE", title)
      .replace(/\$OG_DESCRIPTION/g, description)
      .replace(/\$OG_IMAGE/g, image)
      .replace(/\$OG_URL/g, req.url);

    res.set("Cache-Control", "public, max-age=600, s-maxage=1200");

    res.send(finalHtml);
  });
});

export let ssrapp = https.onRequest(app);
