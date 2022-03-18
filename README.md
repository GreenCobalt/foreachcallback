const request = require("request");
require("./forEachCallback.js");

let arr = ["https://catfact.ninja/fact", "https://catfact.ninja/fact"];

arr.forEachC((i, resolve) => {
    request(i, function (error, request, body) {
        resolve(JSON.parse(body)[0]);
    });
}, (results) => {
    console.log(results);
});