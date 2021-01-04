const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function checkCredential(request) {
    const { credential, password } = request;
    let loginData;
    if (emailRegex.test(credential)) return (loginData = { email: credential, username: null, password });
    return (loginData = { username: credential, email: null, password });
}

module.exports = checkCredential;
