function log() {
  console.log.apply(console, arguments);
}

function assertEq(actualVal, expectedVal) {
  if (actualVal !== expectedVal) {
    console.error(actualVal, " should === ", expectedVal);
    throw actualVal + " should === " + expectedVal;
  }
}

function random(max) {
  return Math.random() * max;
}

function inspectPromiseAfter(promise, delay) {
  setTimeout(function() {
    log(promise.inspect());
  }, delay);
}
