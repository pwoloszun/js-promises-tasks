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

/*
 * Promises:
 1. Crossroads Anim:
 - dwie długie kolejki jezdza na krzyz w losowych odstepach czasu.
 - nie moga sie zderzyc - jesli jedna wjedzie na skrzyzowanie druga
 musi poczekac az pierwsza zjedzie ze skrzyzowania
 * */


$(function() {
//  logIn('Bob', "#secret").then(function(user) {
//    return getFriendsFor(user).then(function(friends) {
//      return sendInvitationsTo(friends).then(function() {
//        log("done!", arguments);
//      }, function(error) {
//        log("sendInvitationsTo error", error);
//        throw error;
//      });
//    }, function(error) {
//      log("getFriendsFor error", error);
//      throw error;
//    });
//  },function(error) {
//    log("logIn error", error);
//    throw error;
//  }).catch(function(error) {
//    log("error!", error);
//  });
  // chain
  logIn('Bob', "#secretX").then(function(user) {
    return getFriendsFor(user);
  }, function(error) {
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
});
