import express from "express";
import bodyParser from "body-parser"
import logger from 'morgan'
import cors from 'cors'
import publicRouter from "../routes";

const app = express();

const port = process.env.PORT || "3001";

app.use(
    logger('dev'),
    cors({
        exposedHeaders: 'XSRF-TOKEN',
    }),
    bodyParser.json({limit: '50mb'}),
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'})
})
app.use('/api',publicRouter);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: res.locals.error = req.app.get('env') === 'development' ? err : {}
    });
  });

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
