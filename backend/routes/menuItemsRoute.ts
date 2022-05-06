import express from "express";
import { getMenuItems, addMenuItem, deleteMenuItem } from "../controllers/menuItemControllers";

const router = express.Router();

router.get("/", async (req, res) => res.send(await getMenuItems()));
router.delete("/:idRequest", async (req, res) =>
  res.send(await deleteMenuItem(parseInt(req.params.idRequest)))
);
router.post("/", async (req, res) => {
  res.send(await addMenuItem(req.body));
});

export default router;
