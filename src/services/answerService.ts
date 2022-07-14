import questionRepository from "../repositories/questionRepository.js";
import answerRepository from  "../repositories/answerRepository.js";
import { CreateAnswerData } from "../repositories/answerRepository.js";

async function create(newAnswer: CreateAnswerData) {
  const existingQuestion = await questionRepository.findById(newAnswer.questionId);
  if (!existingQuestion) {
    throw {
      type: "not_found",
      message: "question does not exist",
    };
  }

  await answerRepository.insert(newAnswer);
}

const answerService = {
  create,
};

export default answerService;