import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController, listUserProfileController } from "../controllers/users.controllers";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyAdminMiddleware from "../middlewares/verifyGetAdm.middleware";
import verifyUuidMiddleware from "../middlewares/verifyUuid.middleware";

const router = Router();

router.post('', verifyEmailAvailabilityMiddleware, createUserController);
router.get('', verifyAuthTokenMiddleware, listUsersController);
router.get('/profile', verifyAuthTokenMiddleware, verifyAdminMiddleware, listUserProfileController);
router.patch('/:uuid', verifyAuthTokenMiddleware, verifyUuidMiddleware, verifyAdminMiddleware, updateUserController);
router.delete('/:uuid', verifyAuthTokenMiddleware, verifyUuidMiddleware, verifyAdminMiddleware, deleteUserController);

export default router;