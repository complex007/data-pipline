const superagent= require('superagent');
class ExtractController {
  async getNews(){
    let news = [];
    let newsSources = [];
    const normalizedPath = require("path").join(__dirname, "sources");
    const fs = require("fs");
    await fs.readdirSync(normalizedPath).forEach(function(file) {
      newsSources.push(require("./sources/" + file));
    });
    for (let i = 0; i < newsSources.length; i += 1) {
      let source = newsSources[i];
      await superagent.get(source.url)
      .then((res) => {
        news.push(source.getNews(res));
      });
    }
    return news.reduce((a, b) => [...a, ...b], []);;
  }
}


module.exports = new ExtractController();

