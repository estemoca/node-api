import { Router } from "express";
import { methods as amigosController } from "./../controllers/amigos.controller";

const router = Router();
//trae todos los amigos
router.get("/", amigosController.getFriends);
//trae un solo amigo por parametro
router.get("/:id", amigosController.getFriend);
//crear un nuevo amigo
router.post("/", amigosController.addFriend)
    //elimina un amigo por parametro id
router.delete("/:id", amigosController.deleteFriend)
    // actualiza informacion de un amigo por id
router.put("/:id", amigosController.updateFriend);

export default router;