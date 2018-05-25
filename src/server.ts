import express from "express";
import routes from "./routes";
import settings from "./settings";
import sampleMiddleware from "./middleware/sample";

// Start the main API.
const app = express();

app.use(sampleMiddleware);
app.use(routes);
app.listen(settings.port, () => console.log('Listen on localhost port', settings.port));