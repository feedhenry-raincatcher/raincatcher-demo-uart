var customCommands = {
  verifyIsDisplayed: function() {
    return this
      .waitForElementVisible('@header');
  }
};

module.exports = {
  url: function() {
    return this.api.globals.wfm.host + '#/workorders/list';
  },
  elements: {
    header: {
      selector: '//h3/span[text()="Workorders"]',
      locateStrategy: 'xpath'
    },
    newButton: {
      selector: 'a[aria-label="New Workorder"]'
    },
    deleteButton: {
      selector: 'button[aria-label="Delete"]'
    },
    proceedButton: {
      selector: 'button[aria-label="Proceed"]'
    },
    editButton: {
      selector: 'a[aria-label="Edit"]'
    },
    cancelButton: {
      selector: 'button[aria-label="Cancel"]'
    },
    searchField: {
      selector: 'input[name="search"]'
    }
  },
  commands: [customCommands]
};