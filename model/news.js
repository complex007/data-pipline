// "source": "The Wall Street Journal",
//       "title": "Berkshire Hathaway Benefits From US Tax Plan",
//       "description": "Berkshire Hathaway posted a $29 billion gain in 2017 related to changes in U.S. tax law, a one-time boost that inflated annual profits for the Omaha conglomerate.",
//       "url": "https://www.wsj.com/articles/berkshire-hathaway-posted-29-billion-gain-in-2017-from-u-s-tax-plan-1519480047",
//       "urlToImage": "https://si.wsj.net/public/resources/images/BN-XP717_3812B_TOP_20180224064100.jpg",
//       "publishedAt": "2018-02-24T18:42:00Z",
//       "digest":"3RjuEomJo26O1syZbU7OHA==1",
//       "reason": "Recommend"
class News {
  constructor(source, title, url, date, digest) {
    super();
    this.source = source;
    this.title = title;
    this.url = url;
    this.date = date;
    this.digest = digest;
  }
}
module.exports = News;