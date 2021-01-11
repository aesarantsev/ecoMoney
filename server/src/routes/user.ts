import express, { Request, Response} from 'express';
const router = express.Router();

// Get user informations
router.get("/", (req: Request, res: Response) => {
  const user = (req.user && req.user.hidePassword()) || null;
  res.status(200).send({ message: "User info successfully retreived", user });
});

export default router;