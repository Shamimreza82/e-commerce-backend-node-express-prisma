import express, { Application } from "express";
import { RootRouter } from "./routes";
import { PrismaClient } from "@prisma/client";
import { globalErrorHandler } from "./expceptions/globalErrorHandler";
import { notFound } from "./expceptions/notFound";

const app: Application = express();
app.use(express.json());

app.use("/api/v1", RootRouter);
export const prismaClient = new PrismaClient();    ///todo connect prisma client for model query

app.use(notFound);
app.use(globalErrorHandler);

export default app;
