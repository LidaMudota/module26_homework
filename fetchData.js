function fetchData(isSuccess) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) {
                resolve('peanut butter');
            } else {
                reject('error');
            }
        }, 1000);
    });
}

module.exports = fetchData;
