import express from 'express'
import swaggerUi from "swagger-ui-express";
import 'reflect-metadata';
import {Request, Response, NextFunction} from "express"
import "express-async-errors"


import { router } from './routes'
import swaggerFile from './swagger.json';

import "./database"

import "./shared/container"
import { AppError } from './errors/AppError';

const app = express()

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.use(
  (err: Error, req: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
      return response.status(err.statusCode).json({
        message: err.message
      })
    }

    return response.status(500).json({
      status: "error",
      message: `Internal Server Error - ${err.message}`
  })
})

app.listen(3333, () => console.log('Server is running'))