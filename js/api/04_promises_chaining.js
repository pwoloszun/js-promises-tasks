function promisesChaining() {
  var promise1 = fulfilledPromise();
  var promise2 = fulfilledPromise();
  var promise3 = fulfilledPromise();

  promise1.then(function(value1) {
    log("1st promise fulfilled with", value1);
    return promise2;
  }).then(function(value2) {
    log("2nd promise fulfilled with", value2);
    return promise3;
  }).then(function(value3) {
    log("3rd promise fulfilled with", value3);
    return 123;
  });
}
//promisesChaining();

function promisesChaining2() {
  fulfilledPromise().then(function(value1) {
    log("1st promise fulfilled with", value1);
    return fulfilledPromise();
  }).then(function(value2) {
    log("2nd promise fulfilled with", value2);
    return fulfilledPromise();
  }).then(function(value3) {
    log("3rd promise fulfilled with", value3);
    return 123;
  });
}
//promisesChaining2();
