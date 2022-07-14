import { prisma } from "../config/database.js";
import { Question } from "@prisma/client";

export type NewQuestion = Omit<Question, "id">;

async function insert(newQuestion: NewQuestion) {
  await prisma.question.create({
    data: newQuestion,
  });
}

const questionRepository = {
  insert,
};

export default questionRepository;