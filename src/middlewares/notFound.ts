import { Request, Response } from "express";

/**
 * @param _req -> Request
 * @param res -> Response
 * @note > sends a 404 when it can not find the route, call end of routing in app
 */
export const notFound = (_req: Request, res: Response) => {
  res.status(404).json({ message: "ROUTE_DOES_NOT_EXIST", status: 404 });
};
