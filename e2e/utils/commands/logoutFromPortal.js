module.exports.command = function() {
  var loginPage = this.page.login();
  loginPage
    .navigate()
    .logout();
  return this;
};