const moment = require('moment');
const crypto = require('crypto');

class TransferController {
  async transferNews(newsArray){
    let news = [];
    for(let i = 0 ; i < newsArray.length; i += 1) {
      let rawNews = newsArray[i];
      news.push({...rawNews, date: moment.utc(), digest: await crypto.createHash('md5').update(rawNews.title).digest("hex")});
    }   
    return news;
  }
}


module.exports = new TransferController();

