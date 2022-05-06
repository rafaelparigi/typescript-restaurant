import express from "express";
import { deleteMenu, getMenus, addMenu } from "../controllers/menuControllers";

const router = express.Router();

router.get("/", async (req, res) => res.send(await getMenus()));
router.delete("/:idRequest", async (req, res) =>
  res.send(await deleteMenu(parseInt(req.params.idRequest)))
);
router.post("/", async (req, res) => {
  res.send(await addMenu(req.body));
});
export default router;
