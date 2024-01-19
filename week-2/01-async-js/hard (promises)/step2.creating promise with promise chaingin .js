function firstAsyncFunction(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve(`Resolved with value: ${value}`);
            } else {
                reject('Rejected: Value is falsy');
            }
        }, 1000);
    });
}

function secondAsyncFunction(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processedData = input.toUpperCase();
            resolve(`Processed data: ${processedData}`);
        }, 500);
    });
}

function thirdAsyncFunction(finalInput) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Final result: ${finalInput}`);
        }, 800);
    });
}

// Promise chaining
firstAsyncFunction('Hello')
    .then((resultFromFirstFunction) => {
        console.log(resultFromFirstFunction);

        // Return a new promise from the first .then() block
        return secondAsyncFunction(resultFromFirstFunction);
    })
    .then((resultFromSecondFunction) => {
        console.log(resultFromSecondFunction);

        // Return a new promise from the second .then() block
        return thirdAsyncFunction(resultFromSecondFunction);
    })
    .then((finalResult) => {
        console.log(finalResult);
    })
    .catch((error) => {
        console.error(error);
    });
