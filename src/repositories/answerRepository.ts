import { prisma } from "../config/database.js";
import { Answer } from "@prisma/client";

export type NewAnswer = Omit<Answer, "id" | "questionId">;
export type CreateAnswerData = Omit<Answer, "id">;

async function insert(createAnswer: CreateAnswerData) {
  await prisma.answer.create({
    data: createAnswer,
  });
}

const answerRepository = {
  insert,
};

export default answerRepository;