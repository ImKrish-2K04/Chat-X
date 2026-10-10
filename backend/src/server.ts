import { env } from "./configs/env.config.js";
import { createApp } from "./app.js";
import http from "node:http";

const PORT: number = env.PORT || 4000;

const startServer = async () => {
  const app = createApp();
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(
      `Server is listening on port ${PORT} | http://localhost:${PORT}`,
    );
  });
};

startServer().catch((err) => {
  console.error(`Error while starting the server, ${err}`);
  process.exit(1);
});
