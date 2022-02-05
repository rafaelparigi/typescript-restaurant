import express from 'express';
import { getRestaurants, getRestaurant, addRestaurant, deleteRestaurant } from '../controllers/restaurantControllers';

const router = express.Router();

router.get("/", async (req, res) => res.send(await getRestaurants()));
router.get("/:idRequest", async (req, res) => res.send(await getRestaurant(parseInt(req.params.idRequest))));
router.post("/", async (req, res) => res.send(await addRestaurant(req.body)));
router.delete("/:idRequest", async (req, res) => res.send(await deleteRestaurant(parseInt(req.params.idRequest))));

export default router;
