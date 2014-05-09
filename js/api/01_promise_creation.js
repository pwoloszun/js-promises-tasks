
function loginPromise(username, password) {
  var deferred = Q.defer();
  setTimeout(function() {
    if (username == "bob" && password === "secret")
      deferred.resolve({firstName: "Bob", lastName: "Smith", id: 100});
    else
      deferred.reject(new Error("Wrong login or password"));
  }, 600);
  return deferred.promise;
}

function fulfilledPromise() {
  return loginPromise("bob", "secret");
}

function rejectedPromise() {
  return loginPromise("qq", "imba!");
}
