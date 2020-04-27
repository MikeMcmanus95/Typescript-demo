function getHumanReadableMessaage(response) {
    if (response.data.hasSucceeded) {
        return 'Yay! Your action has succeeded because: ' + response.data.message;
    }
    return 'Oops, something went wrong.';
}
const apiResponse = {
    data: {
        hasSucceeded: true,
        message: 'Successful log in.',
    },
};
console.log(getHumanReadableMessaage(apiResponse));
