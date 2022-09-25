import { Router } from 'express';
import { createUserController, deleteUserController, listUsersController, updateUserController, listUserProfileController } from '../controllers/users.controllers';
import verifyEmailAvailabilityMiddleware from '../middlewares/verifyEmailAvailability.middleware';
import verifyAuthTokenMiddleware from '../middlewares/verifyAuthToken.middleware';
import verifyAdminMiddleware from '../middlewares/verifyGetAdm.middleware';
import verifyUuidMiddleware from '../middlewares/verifyUuid.middleware';
import verifyAuthTokenAdminMiddleware from '../middlewares/verifyAuthTokenAdmin.middleware';

const router = Router();

router.post('', verifyEmailAvailabilityMiddleware, createUserController);
router.get('', verifyAuthTokenMiddleware, listUsersController);
router.get('/profile', verifyAuthTokenMiddleware,  listUserProfileController);
router.patch('/:uuid', verifyAuthTokenMiddleware,  verifyUuidMiddleware, updateUserController);
router.delete('/:uuid', verifyAuthTokenMiddleware, verifyUuidMiddleware,  deleteUserController);

export default router;