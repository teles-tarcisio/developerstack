import Joi from "joi";
import { NewAnswer } from "../repositories/answerRepository";

export const answerSchema = Joi.object<NewAnswer>({
  answer: Joi.string().required(),
});
