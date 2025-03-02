//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");
    function createPromise(index) {
        return new Promise((resolve) => {
            let time = (Math.random() * 2 + 1).toFixed(3); 
            setTimeout(() => resolve({ index, time }), time * 1000);
        });
    }

    let promises = [createPromise(1), createPromise(2), createPromise(3)];
    Promise.all(promises)
        .then((results) => {
            output.innerHTML = "";
            results.forEach(({ index, time }) => {
                let row = `<tr>
                    <td>Promise ${index}</td>
                    <td>${time}</td>
                </tr>`;
                output.innerHTML += row;
            });

            let totalTime = Math.max(...results.map(r => parseFloat(r.time))).toFixed(3);
            let totalRow = `<tr class="table-success">
                <td><strong>Total</strong></td>
                <td><strong>${totalTime}</strong></td>
            </tr>`;

            output.innerHTML += totalRow;
        })
        .catch((error) => {
            output.innerHTML = `<tr class="table-danger">
                <td colspan="2" class="text-center text-danger">Error: ${error.message}</td>
            </tr>`;
        });
});
