const cheerio = require('cheerio');

// the number of hot news is fixed at 13;
let getHotNews = (res) => {
  let hotNews = [];
  const $ = cheerio.load(res.text);

  // #TODO: record error if the path has changed and is unable to get data
  const xpathForNewsLinks = [
    'div#main_touban div.touban-pic div.mod-pic-toggle.ads-loc-holder div.mod-pic-guide.clearfix ul.mod-pic-title li a',
    'div#main_touban div.touban-guide.clearfix h2 a',
    'div#main_touban div.touban-guide.clearfix ul.touban-side li a'
  ];
  for(let i = 0 ; i < xpathForNewsLinks.length; i += 1) {
    let xpath = xpathForNewsLinks[i];
    $(xpath).each((idx, ele) => {
      let news = {
        title: $(ele).text().replace(/\r?\n|\r|\t/g,''),
        href: $(ele).attr('href'),
        source: 'tianyabagua'
      };
      hotNews.push(news);
    });
  }
  return hotNews;
};

module.exports = {
  url: 'http://bbs.tianya.cn/list-funinfo-1.shtml',
  getNews: getHotNews
}