function PromisesApp() {
  var view = new TweetsView("#get-tweets-btn");
  view.tweetsBtnClickedPromise()
  .then(view.showSpinner)
  .then(usersStore.getAll)
  .then(twitterService.usersTweets)
  .then(view.showTweets)
  .otherwise(view.showError)
  .always(view.hideSpinner);
}

function promisesChainApp() {
  // chain
  logIn('Bob', "#secretX").then(function(user) {
    return getFriendsFor(user);
  },function(error) {
    log("getFriendsFor error", error);
    throw error;
  }).then(function(friends) {
    log("sen");
    return sendInvitationsTo(friends);
  }).then(function() {
    log("Success!", arguments);
  }).catch(function(error) {
    log("catch error", error);
  });
}
//promisesChainApp();
