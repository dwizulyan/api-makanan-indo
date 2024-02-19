import { Hono } from "hono";
import * as controller from "../controllers/api";

const apiRoutes = new Hono();

apiRoutes.get("/", controller.sayHello);
apiRoutes.get("/get-daerah", controller.getDaerah);
apiRoutes.get("/makanan", controller.getMakanan);
apiRoutes.get("/resep", controller.getResep);

apiRoutes.post("/create-daerah", controller.createDaerah);
apiRoutes.post("/create-makanan", controller.createMakanan);
apiRoutes.post("/create-resep", controller.createResep);

export default apiRoutes;
