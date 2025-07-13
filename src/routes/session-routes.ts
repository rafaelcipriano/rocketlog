import { Router } from "express";

import { SessionsController } from "@/controllers/sessions-controller";

const sessionsRoutes = Router()
const sessionsControler = new SessionsController()

sessionsRoutes.post("/", sessionsControler.create)

export { sessionsRoutes }