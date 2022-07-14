import { Answer } from "@prisma/client";

export type NewAnswer = Omit<Answer, "id" | "questionId">;