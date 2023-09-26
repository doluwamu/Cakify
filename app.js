import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import auth from "express-openid-connect";
// import logger from "logger";

import cakeRoutes from "./routes/cakes.js";

dotenv.config();

const PORT = process.env.PORT;

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   baseURL: BASEURL,
//   clientID: CLIENTID,
//   issuerBaseURL: ISSUER,
//   secret: SECRET,
// };

const app = express();

// app.use(logger("dev"));
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(auth(config));

app.use("/api/v1/cakes", cakeRoutes);

app.listen(PORT, console.log(`app running on port ${PORT}`));
