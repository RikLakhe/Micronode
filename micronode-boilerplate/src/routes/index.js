import {Router} from 'express'

import userRoutes from "./userRoutes";
import moduleRoutes from "./moduleRoutes";

const publicRouter = Router();

publicRouter.use('/users',userRoutes);
publicRouter.use('/modules',moduleRoutes);

export default publicRouter;
