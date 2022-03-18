Array.prototype.forEachC = a;
function a(f, c) {Promise.all(this.map((x) => new Promise(r => {f(x, (b) => {r(b)})}))).then((values) => {c(values)});}
module.exports = {}