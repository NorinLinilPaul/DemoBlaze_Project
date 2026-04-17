// Global storage for test data
let sharedCredentials = null;

export function setCredentials(credentials) {
    sharedCredentials = credentials;
}

export function getCredentials() {
    return sharedCredentials;
}