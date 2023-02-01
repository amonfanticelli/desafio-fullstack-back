import { createSessionService } from "../../services/sessions/createSession.services";
import { Request, Response } from "express";

const createSessionController = async (req: Request, res: Response) => {
  const token = await createSessionService(req.body);
  return res.json({ token });
};

export { createSessionController };
