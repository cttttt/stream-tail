const
    tap = require("tap"),
    tailStream = require("../stream-tail");

const stream = tailStream();
var chunksRead = 0;

stream
    .on("data", function () {
        chunksRead++;
    })
    .on("end", function () {
        tap.equals(chunksRead, 0, "No chunks were read");
    });

stream.end();
