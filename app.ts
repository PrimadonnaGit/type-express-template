import * as express from "express";

const app: express.Application = require("express")();

app.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("hello typescript express!");
  }
);

export default app;
