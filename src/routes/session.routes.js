import { Router } from "express";
import createSessionController from "../controllers/sessions.controllers";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const loginRoutes = Router();

loginRoutes.post('', createSessionController);

export default loginRoutes;