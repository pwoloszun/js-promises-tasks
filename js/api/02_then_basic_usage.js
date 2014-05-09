function thenBasicUsage() {
  var onFulfilledCallback = function(value) {
    log("fulfilled!", value);
  };
  var onRejectedCallback = function(error) {
    log("rejected :(", error);
  };

  // always calls onFulfilledCallback
  fulfilledPromise().then(onFulfilledCallback, onRejectedCallback);

  // always calls onRejectedCallback
  rejectedPromise().then(onFulfilledCallback, onRejectedCallback);
}
