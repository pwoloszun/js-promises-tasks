function chainingWithoutErrorHandling() {
  fulfilledPromise().then(function(value1) {
    log("1st promise fulfilled with", value1);
    return rejectedPromise();
  }).then(function(value2) {
    log("2nd promise fulfilled with", value2); // never happens
    return fulfilledPromise();
  }).then(function(value3) {
    log("3rd promise fulfilled with", value3); // never happens
    return 123;
  });
}
//chainingWithoutErrorHandling();

function chainingWithConcreteErrorHandling() {
  fulfilledPromise().then(function(value1) {
    log("1st promise fulfilled with", value1);
    return rejectedPromise();
  }).then(function(value2) {
    log("2nd promise fulfilled with", value2); // never happens
    return fulfilledPromise();
  }, function(error2) {
    log("2nd promise rejected with", error2);
  }).then(function(value3) {
    log("3rd promise fulfilled with", value3);
    return 123;
  });
}
//chainingWithConcreteErrorHandling();

function chainingWithDefaultErrorHandling() {
  fulfilledPromise().then(function(value1) {
    log("1st promise fulfilled with", value1);
    return rejectedPromise();
  }).then(function(value2) {
    log("2nd promise fulfilled with", value2); // never happens
    return fulfilledPromise();
  }).then(function(value3) {
    log("3rd promise fulfilled with", value3); // never happens
    return 123;
  }).catch(function(error) {
    log("[CATCH] some promise rejected with", error);
  });
}
//chainingWithDefaultErrorHandling();

function chainingWithBothDefaultAndConcreteErrorHandling() {
  fulfilledPromise().then(function(value1) {
    log("1st promise fulfilled with", value1);
    return rejectedPromise();
  }).then(function(value2) {
    log("2nd promise fulfilled with", value2); // never happens
    return fulfilledPromise();
  }, function(error2) {
    log("2nd promise rejected with", error2);
    throw new Error("some error");
  }).then(function(value3) {
    log("3rd promise fulfilled with", value3); // never happens
    return 123;
  }).catch(function(error) {
    log("[CATCH] some promise rejected with", error);
  });
}
//chainingWithBothDefaultAndConcreteErrorHandling();

