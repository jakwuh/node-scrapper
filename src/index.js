import {remote} from 'webdriverio';
import {Spider} from './Spider';
import chalk from 'chalk';
import co from 'co';

export function crawl(callback) {

    return co(function*() {

        let options = {
            desiredCapabilities: {},
            host: 'localhost',
            port: 4444
        };

        let browser = remote(options);
        let spider = new Spider(browser);

        yield browser.init();

        callback(spider);

        while (!spider.isEmpty()) {
            let {url, callback} = spider.shift();
            yield spider.browser.url(url);
            yield* callback(browser, spider);
        }

    }).catch(err => {
        console.trace(chalk.bold.red(err));
    });

}
