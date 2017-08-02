// prefill-an-array
function prefill(n, v) {
    if (typeof n == 'boolean' || n != ~~n || n < 0 || !isFinite(n))
        throw new TypeError(n + ' is invalid');
    return Array.apply(null, { length: n }).map(function () { return v; });
}
