import express from "express";
import cors from "cors";
import restaurantRouter from "./routes/restaurantsRoute";

// rest of the code remains same
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/restaurants", restaurantRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`⚡️Server is running at https://localhost:${PORT}`);
});
