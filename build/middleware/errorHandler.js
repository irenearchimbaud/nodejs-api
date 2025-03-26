import { ZodError } from 'zod';
export const errorHandler = (err, _req, res, _next) => {
    if (err instanceof ZodError) {
        res.status(400).json({
            error: 'Validation error',
            details: err.errors,
        });
        return;
    }
    if (err instanceof Error) {
        res.status(500).json({
            error: err.name,
            message: err.message,
        });
        return;
    }
    res.status(500).json({ error: 'Unknown error' });
};
