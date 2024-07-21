import { NextFunction, Request, Response } from "express";

// Middleware function to wrap controllers with try-catch
export const wrapAsync = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

