var customCommands = {
  verifyIsDisplayed: function() {
    return this
      .waitForElementVisible('@header')
      .waitForElementVisible('@datePicker');
  }
};

module.exports = {
  url: function() {
    return this.api.globals.wfm.host + '#/schedule';
  },
  elements: {
    header: {
      selector: '//h3/span[text()="Scheduler"]',
      locateStrategy: 'xpath'
    },
    datePicker: {
      selector: 'md-datepicker[ng-model="ctrl.scheduleDate"]'
    },
  },
  commands: [customCommands]
};