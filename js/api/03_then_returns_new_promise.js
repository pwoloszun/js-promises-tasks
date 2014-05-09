function thenReturnsNewPromise() {
  var promise = fulfilledPromise();
  var outputPromise = promise.then();

  log(outputPromise);
  log(outputPromise !== promise);
  inspectPromiseAfter(outputPromise, 1000);
}
//thenReturnsNewPromise();

function thenExampleUsage1() {
  // 1) fulfilledCallback returns non-promise object
  var outputPromise = fulfilledPromise().then(function(value) {
    return 123;
  });
  inspectPromiseAfter(outputPromise, 1000);
}
//thenExampleUsage1();

function thenExampleUsage2() {
  // 2) fulfilledCallback returns promise object
  var deferred = Q.defer();
  var promiseToReturn = deferred.promise;
  var outputPromise = fulfilledPromise().then(function(value) {
    return promiseToReturn;
  });
  log(outputPromise === promiseToReturn);
}
//thenExampleUsage2();

function thenExampleUsage3() {
  // 3) rejectedCallback does NOT throw error
  var outputPromise = rejectedPromise().then(null, function(error) {
    // do NOT throw error
    return "some value";
  });
  inspectPromiseAfter(outputPromise, 1000);
}
//thenExampleUsage3();

function thenExampleUsage4() {
  // 4) rejectedCallback throws error
  var outputPromise = rejectedPromise().then(null, function(error) {
    throw new Error("some error!");
  });
  inspectPromiseAfter(outputPromise, 1000);
}
//thenExampleUsage4()
