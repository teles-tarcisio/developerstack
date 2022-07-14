import Joi from "joi";
import { NewQuestion } from "../repositories/questionRepository";

export const questionSchema = Joi.object<NewQuestion>({
  question: Joi.string().required()
});
