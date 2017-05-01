function Promise(fn) {
    if (typeof fn !== 'function') throw new TypeError(' undefined is not a promise')


}

function reject() {

}

Promise.resolve = function (value) { }

Promise.reject = function (value) { }

Promise.prototype.then = function (onFulfilled, onRejected) {

    return this
}


function doResolve(fn, promise) {
    fn(function (value) {
        resolve(val)
    }, function (reason) {
        reject(reason)

    })
}


function resolve(value) {

}

function reject(reason) {

}