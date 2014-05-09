function logIn(login, password) {
  var deferred = Q.defer();
  setTimeout(function() {
    var user = UsersRepository.findByLogin(login);
    if (user && user.password === password)
      deferred.resolve(user);
    else
      deferred.reject(new Error("Wrong login or password"));
  }, 1000);
  return deferred.promise;
}
