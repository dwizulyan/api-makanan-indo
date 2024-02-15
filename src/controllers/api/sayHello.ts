import { Context } from "hono";

function sayHello(c: Context) {
  return c.json({
    success: true,
    message: "Hello Hono",
  });
}
export default sayHello;
