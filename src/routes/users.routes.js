import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController, listUserProfileController } from "../controllers/users.controllers";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyAdminMiddleware from "../middlewares/verifyAdmin.middleware";

const router = Router();

router.post('', verifyEmailAvailabilityMiddleware, createUserController);
router.get('', verifyAuthTokenMiddleware, listUsersController);
router.get('/profile', verifyAuthTokenMiddleware, listUserProfileController);
router.patch('/:uuid', verifyAuthTokenMiddleware, verifyAdminMiddleware, updateUserController);
router.delete('/:uuid', verifyAuthTokenMiddleware, deleteUserController);

export default router;