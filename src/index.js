import {remote} from 'webdriverio';
import {Spider} from './Spider';
import chalk from 'chalk';
import co from 'co';

export function crawl(callback, options) {

    options = Object.assign({
        desiredCapabilities: {
            browserName: 'chrome'
        },
        host: 'localhost',
        port: 4444
    }, options);

    let browser = remote(options);
    let spider = new Spider(browser);

    return co(function*() {
        yield browser.init();

        callback(spider);

        while (!spider.isEmpty()) {
            let {url, callback} = spider.shift();
            yield spider.browser.url(url);
            yield* callback(browser, spider);
        }

    }).catch(err => {
        console.trace(chalk.bold.red(err));
    }).then(() => {
        browser.end();
    });

}
