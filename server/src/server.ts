// Back-end API RESTful

// Rotas (vamos usar o fastify)
// localhost:3333/habits
// localhost:3333

import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors)

/*
 * Métodos HTTP: Get, Post, Put, Patch, Delete
 **/

app.get("/", async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: "",
            },
        },
    });

    return habits;
});

app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP server running!");
});
