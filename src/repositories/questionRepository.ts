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

async function findAll() {
  return await prisma.question.findMany();
}

async function findByIdWithAnswers(questionId: number) {
  return await prisma.question.findFirst({
    where: {
      id: questionId,
    },
    select: {
      id: true,
      question: true,
      answers: {
        select: {
          answer: true,
        },
      },
    },
  });
}

const questionRepository = {
  insert,
  findById,
  findAll,
  findByIdWithAnswers,
};

export default questionRepository;