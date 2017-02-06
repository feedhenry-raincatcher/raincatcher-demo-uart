module.exports.command = function() {
  this
    .waitForElementVisible('md-progress-circular')
    .waitForElementNotPresent('md-progress-circular');
  return this;
};
