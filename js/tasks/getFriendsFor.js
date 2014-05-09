/*
 * After 3 seconds (setTimeout), for given user object with id:
 * - returns user friends list if found
 * - returns error if does not found friends for given id
 * */
function getFriendsForPromise(user) {
  var FRIENDS = [
    {name: "Kate", id: 2, userId: 1},
    {name: "Ed", id: 3, userId: 1},
    {name: "Bob", id: 3, userId: 2}
  ];
  //TODO
}

function getFriendsForExampleUsage() {
  getFriendsForPromise({id: 1}).then(function(friends) {
    log(friends); // should return friends
  }, function(error) {
    log(error);
  });

  getFriendsForPromise({id: 997}).then(function(friends) {
    log(friends);
  }, function(error) {
    log(error);// should return error
  });
}
