module.exports.command = function(username, password) {
  var loginPage = this.page.login();
  loginPage.clear();
  loginPage.login(username, password);
  return this;
};