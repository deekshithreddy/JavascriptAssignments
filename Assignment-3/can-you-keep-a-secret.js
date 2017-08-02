// can-you-keep-a-secret
function createSecretHolder(secret) {
    var _secret = secret;
    return {
        getSecret: function () { return _secret; },
        setSecret: function (secretLocal) { _secret = secretLocal; }
    };
}
