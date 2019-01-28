const express = require('express');
const app = express();
const config = require('./config/env')[process.env.NODE_ENV];
const extractController = require('./tasks/extract/extract');
const transferController = require('./tasks/transfer');

// #TODO: log system and database connection

app.get('/', async (req, res, next) => {
  const news = await extractController.getNews();
  const newsModels = await transferController.transferNews(news);
  res.send(newsModels);
});


let server = app.listen(config.port, config.host, () => {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Your App is running at http://%s:%s', host, port);
});