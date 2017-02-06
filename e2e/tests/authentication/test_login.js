describe('Authentication', function() {

  after(function(client, done) {
    client.end(function() {
      done();
    });
  });

  describe('Portal App', function() {
    it("Navigate to the portal's log in page", function(client) {
      client.page.login()
        .navigate();
    });

    it('Wait until login page loaded', function(client) {
      client.loginPageLoad();
    });

    it('Fill in wrong user credentials', function(client) {
      client.loginAsUser('XXXX', 'XXXX');
    });

    it('Error message is displayed', function(client) {
      client.page.login()
        .verifyLoginErrorMessage();
    });

    it('Login with correct credentials', function(client) {
      client.loginAsUser(client.globals.wfm.admin_username, client.globals.wfm.admin_password);
    });

    it('Verify scheduler page is displayed', function(client) {
      client.page.scheduler()
        .verifyIsDisplayed();
    });

    xit('Navigate to settings page', function(/*client*/) {
      // TODO
    });

    xit('Change user password', function(/*client*/) {
      // TODO
    });

    xit('Logout from portal', function(/*client*/) {
      // TODO
    });

    xit('Login with new credentials', function(/*client*/) {
      // TODO
    });

    xit('Verify scheduler page is displayed', function(/*client*/) {
      // TODO
    });

    xit('Login with old credentials', function(/*client*/) {
      // TODO
    });

    xit('Error message is displayed', function(/*client*/) {
      // client.page.login()
      //   .verifyLoginErrorMessage();
    });
  });

  describe('Mobile App', function() {
    xit('Open Mobile App', function(/*client*/) {
      // TODO
    });

    xit('Login with old password', function(/*client*/) {
      // TODO
    });
    xit('Verify login error message visible', function(/*client*/) {
      // TODO
    });
    xit('Login with new password', function(/*client*/) {
      // TODO
    });

    xit('Verify workorder page is displayed', function(/*client*/) {
      // TODO
    });

    xit('Verify workorder page is displayed', function(/*client*/) {
    });
    xit('Logout from portal', function(/*client*/) {
      // TODO
    });

  });

});