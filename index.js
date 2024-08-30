import "dotenv/config";
import express from "express";
import cors from "cors";
import Database from "./src/utils/database/DB.js";
const app = express();

//routes path
import authenticate from "./src/routes/authenticate/authenticate.js";
import publishRoute from "./src/routes/publish/publishRoute.js";
import roomRoutes from "./src/routes/rom/roomRoutes.js";
// setup express files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://roomify-alpha.vercel.app",
  })
);

Database();

//routes
app.use("/auth", authenticate);
app.use("/admin", publishRoute);
app.use("/find", roomRoutes);

// server startup
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
