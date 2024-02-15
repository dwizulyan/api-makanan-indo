import { Hono } from "hono";
import { sayHello } from "../controllers/api";

const apiRoutes = new Hono();

apiRoutes.get("/", sayHello);

export default apiRoutes;
