import { Request, Response } from "express";
import questionService  from "../services/questionService.js";
//import answerService from "../services/answerService.js";

import { NewQuestion } from "../repositories/questionRepository.js";

export async function create(req: Request, res: Response) {
  const question : NewQuestion = req.body;

  await questionService.create(question)

  return res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
