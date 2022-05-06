import express from "express";
import cors from "cors";
import restaurantRouter from "./routes/restaurantsRoute";
import menuRouter from "./routes/menusRoute";
import menuItemRouter from "./routes/menuItemsRoute";

// rest of the code remains same
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/restaurants", restaurantRouter);
app.use("/menus", menuRouter);
app.use("/menu-items", menuItemRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`⚡️Server is running at https://localhost:${PORT}`);
});
