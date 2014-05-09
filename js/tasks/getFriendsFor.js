function getFriendsFor(user) {
  var FRIENDS = [
    {name: "Kate", id: 2},
    {name: "Ed", id: 3}
  ];
//  return FRIENDS;
  var deferred = Q.defer();
  setTimeout(function() {
    deferred.resolve(FRIENDS);
//    deferred.reject(new Error("Can't establish connection with DB"));
  }, 1000);
  return deferred.promise;
}
