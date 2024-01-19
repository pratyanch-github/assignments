function examplePromiseFunction(value) {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            if (value) {
                resolve(`Resolved with value: ${value}`);
            } else {
                reject('Rejected: Value is falsy');
            }
        }, 1000);
    });
}

// Handling the promise using .then()
examplePromiseFunction(0)
    .then((result) => {
        console.log(result); // Resolved with value: Hello
    })
    .catch((error) => {
        console.error(error);
    });
