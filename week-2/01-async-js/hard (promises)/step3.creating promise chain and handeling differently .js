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

const handleFirstResult = (resultFromFirstFunction) => {
    console.log(resultFromFirstFunction);
    return secondAsyncFunction(resultFromFirstFunction);
};

const handleSecondResult = (resultFromSecondFunction) => {
    console.log(resultFromSecondFunction);
    return thirdAsyncFunction(resultFromSecondFunction);
};

const handleFinalResult = (finalResult) => {
    console.log(finalResult);
};

const handleErrors = (error) => {
    console.error(error);
};

// Chaining promises with separate references
firstAsyncFunction('Hello')
    .then(handleFirstResult)
    .then(handleSecondResult)
    .then(handleFinalResult)
    .catch(handleErrors);
