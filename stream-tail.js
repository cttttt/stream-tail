const through2 = require("through2");

function tailStream(count) {
    var buffer = [];

    return through2.obj(
        function (chunk, enc, cb) {
            buffer.push(chunk);

            if (buffer.length > count) {
                buffer.shift();
            }

            cb();
        },
        function (cb) {
            buffer.forEach((chunk) => {
                this.push(chunk);
            });

            cb();
        }
    );
}

module.exports = tailStream;
