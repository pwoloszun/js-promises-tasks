function isOddPromise(i) {
  var deferred = Q.defer();
  setTimeout(function() {
    if (i % 2 === 1)
      deferred.resolve({message: "OK. Is odd", value: i});
    else
      deferred.reject(new Error(i + "is should be odd"));
  }, 600);
  return deferred.promise;
}

function fulfilledPromise() {
  return isOddPromise(997);
}

function rejectedPromise() {
  return isOddPromise(2);
}
