// @param {string} password
// this function takes in a password and return a boolean if the password satisfies certain criteria
// those criteria (for now): has at least one number and one letter
function validation(password) {
    return /\d/.test(password) && /[a-zA-Z]/.test(password);
}

module.exports = validation;