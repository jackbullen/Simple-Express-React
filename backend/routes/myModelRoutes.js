import { Router } from 'express';
import { createMyModel, getMyModels } from '../controllers/myModelController';

const router = Router();

router.post('/', createMyModel);
router.get('/', getMyModels);

export default router;