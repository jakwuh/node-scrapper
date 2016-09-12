import {addCommands} from './commands';

export class Spider {

    constructor(browser) {
        this.browser = browser;
        this.queue = [];

        addCommands(browser);
    }

    get(url, callback) {
        this.queue.push({url, callback});
    }

    isEmpty() {
        return !this.queue.length;
    }

    shift() {
        return this.queue.shift();
    }

}
