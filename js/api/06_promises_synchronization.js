function promisesSynchronization() {
  var promise1 = fulfilledPromise().then(function() {
    log("1st promise fulfilled");
  });
  var promise2 = fulfilledPromise().then(function() {
    log("2nd promise fulfilled");
  });
  var promise3 = fulfilledPromise().then(function() {
    log("3rd promise fulfilled");
  });

  log("before");
  var promises = [promise1, promise2, promise3];
  Q.all(promises).then(function() {
    log("ALL promises fulfilled");
  });
  log("after");
}
//promisesSynchronization();
