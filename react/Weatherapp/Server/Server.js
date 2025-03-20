import cors from "cors";
import express from "express";
import user from "./User.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.get("/api/user", (req, res) => {
    console.log("Sending user data:", user); // Log on backend
    res.json(user);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
