import { Request, Response } from "express";
import questionService  from "../services/questionService.js";
import answerService from "../services/answerService.js";

import { NewQuestion } from "../repositories/questionRepository.js";
import { NewAnswer } from "../repositories/answerRepository.js";

export async function create(req: Request, res: Response) {
  const question : NewQuestion = req.body;

  await questionService.create(question)

  return res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  const { answer } : NewAnswer = req.body;
  const questionId : number = parseInt(req.params.id);

  await answerService.create({ answer,
    questionId });

  return res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const allQuestions = await questionService.getAll();

  return res.send(allQuestions);
}

export async function getById(req: Request, res: Response) {
  const questionId : number = parseInt(req.params.id);

  const questionWithAnswers = await questionService.getAnswersToQuestion(questionId);

  return res.send(questionWithAnswers);
}
