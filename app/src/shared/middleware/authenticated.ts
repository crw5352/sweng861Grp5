import type { NextFunction, Request, Response } from "express";

function isAuthenticated(req: Request, res: Response, next: NextFunction) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.status(401).json({ message: "Unauthorized" });
}

export default isAuthenticated;