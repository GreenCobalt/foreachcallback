Array.prototype.forEachC = a;
function a(f, c) {Promise.all(this.map((x, i) => new Promise(r => {f(x, (b) => {r(b)}, i)}))).then((values) => {c(values)});}
module.exports = {}