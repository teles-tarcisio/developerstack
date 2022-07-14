import { prisma } from "../config/database.js";
import { Question } from "@prisma/client";

export type NewQuestion = Omit<Question, "id">;

async function insert(newQuestion: NewQuestion) {
  await prisma.question.create({
    data: newQuestion,
  });
}

async function findById(questionId: number) {
  return await prisma.question.findFirst({
    where: { id: questionId }
  });
}

const questionRepository = {
  insert,
  findById,
};

export default questionRepository;