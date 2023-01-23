// Back-end API RESTful

// Rotas (vamos usar o fastify)
// localhost:3333/habits
// localhost:3333

import Fastify from "fastify";
import cors from "@fastify/cors";
import { prisma } from "./lib/prisma";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

/*
 * Métodos HTTP: Get, Post, Put, Patch, Delete
 **/

app.listen({
    port: 3000,
    host: '0.0.0.0',
}).then(() => {
    console.log(
        `Server listening on port http://0.0.0.0:${
            (app.server as any).address().port
        }`
    );
});
