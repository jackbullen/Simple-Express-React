import { Router } from 'express';
import { getResources, createResource, getResource } from '../controllers/resourceController';

const router = Router();

router.get('/', getResources);
router.post('/', createResource);
router.get('/:resourceId', getResource);

export default router;
