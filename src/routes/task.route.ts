import { Router } from "express";
import { taskController } from "../controllers";
const router = Router();

router.get('/get', taskController.getAllTask);
router.get('/getById/:id', taskController.getByIdTask);
router.post('/create', taskController.create);
router.put('/update/:id', taskController.update);
router.delete('/delete/:id', taskController.delete);

export default  router;