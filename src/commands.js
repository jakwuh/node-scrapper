export function addCommands(browser) {

    browser.addCommand('elementsAttribute', function(selector, attribute) {
        return this.elements(selector).then(({value}) => {
            return Promise.all(value.map(({ELEMENT}) => {
                return this.elementIdAttribute(ELEMENT, attribute);
            }));
        });
    });

}
