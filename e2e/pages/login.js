var customCommands = {
  login: function(username, password) {
    return this
      .waitForElementVisible('@username')
      .setValue('@username', username)
      .setValue('@password', password)
      .click('@loginButton');
  },
  logout: function() {
    return this
      .waitForElementVisible('@logoutButton')
      .click('@logoutButton');
  },
  clear: function() {
    return this
      .clearValue('@username')
      .clearValue('@password');
  },
  verifyLoginErrorMessage: function() {
    return this
      .waitForElementVisible('@loginErrorMessage')
      .assert.containsText('@loginErrorMessage', 'Authentication Failed! Try Again.');
  }
};

module.exports = {
  url: function() {
    return this.api.globals.wfm.host + '#/login';
  },
  elements: {
    username: {
      selector: '#username'
    },
    password: {
      selector: '#password'
    },
    loginButton: {
      selector: 'button[aria-label="Log in"]'
    },
    loginErrorMessage: {
      selector: 'div[ng-message=error]'
    },
    logoutButton: {
      selector: 'button[aria-label="Log out"]'
    }
  },
  commands: [customCommands]
};