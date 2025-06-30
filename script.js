const output = document.getElementById("output");

const promise1 = () => {
    return new Promise((resolve, reject) => {
        const time = 1000; // duration in milliseconds
        setTimeout(() => {
            console.log("promise1");
            resolve(time / 1000); // resolve with time in seconds
        }, time);
    });
};

const promise2 = () => {
    return new Promise((resolve, reject) => {
        const time1 = 2000; // duration in milliseconds
        setTimeout(() => {
            console.log("promise2");
            resolve(time1 / 1000); // resolve with time in seconds
        }, time1);
    });
};

const promise3 = () => {
    return new Promise((resolve, reject) => {
        const time2 = 3000; // duration in milliseconds
        setTimeout(() => {
            console.log("promise3");
            resolve(time2 / 1000); // resolve with time in seconds
        }, time2);
    });
};

Promise.all([promise1(), promise2(), promise3()])
    .then((results) => {
        output.innerHTML = ""; // Clear previous output
        results.forEach((time, index) => {
            let row = `<tr>
                <td>Promise ${index + 1}</td>
                <td>${time.toFixed(3)}</td>
            </tr>`;
            output.innerHTML += row;
        });

        // Calculate and add the total time taken
        let totalTime = Math.max(...results).toFixed(3);
        let totalRow = `<tr class="table-success">
            <td><strong>Total</strong></td>
            <td><strong>${totalTime}</strong></td>
        </tr>`;
        output.innerHTML += totalRow;
    })
    .catch((error) => {
        console.error("Error:", error);
    });