import questionRepository from "../repositories/questionRepository.js";
import { NewQuestion } from "../repositories/questionRepository.js";

async function create(newQuestion: NewQuestion) {
  await questionRepository.insert(newQuestion);
}

const questionService = {
  create,
};

export default questionService;