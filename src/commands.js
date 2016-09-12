export function addCommands(browser) {

    browser.addCommand('elementsAttribute', function(selector, attribute) {
        return this.elements(selector).then(elements => {
            return Promise.all[elements.map(({Id}) => {
                return this.elementIdAttribute(Id, attribute);
            })];
        });
    });

}
