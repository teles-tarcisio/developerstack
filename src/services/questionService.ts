import questionRepository from "../repositories/questionRepository.js";
import { NewQuestion } from "../repositories/questionRepository.js";

async function create(newQuestion: NewQuestion) {
  await questionRepository.insert(newQuestion);
}

async function getAll() {
  const questions = await questionRepository.findAll();

  return questions;
}

async function getAnswersToQuestion(questionId: number) {

  const question = await questionRepository.findByIdWithAnswers(questionId);
  if (!question) {
    throw {
      type: "not_found",
      message: "question does not exist",
    };
  }

  return question;
}

const questionService = {
  create,
  getAll,
  getAnswersToQuestion,
};

export default questionService;