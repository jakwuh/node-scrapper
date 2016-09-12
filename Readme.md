# node-scrapper

Non-blocking node.js scrapper.  
Inspired by [scrappy](https://github.com/scrapy/scrapy).

## Usage

```js
import {crawl} from 'node-scrapper';

function* parse(browser, spider) {
    let source = yield browser.getText('#my-element');
    let pictureUrl = yield browser.getAttribute('#my-second-element', 'href');
    spider.get(pictureUrl, parsePicture);
}

function* parsePicture(browser, spider) {
    let imageUrl = yield browser.getAttribute('img.logo', 'src');
    saveToDB(imageUrl);
}

crawl(spider => {
    spider.get('http://example.com', parse);
});

```
