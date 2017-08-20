const
    tap = require("tap"),
    tailStream = require("../stream-tail");

const stream = tailStream(5);

var testData = [];
for (var i=0; i<10; i++) {
    testData[i] = i;
}

var chunksRead = [];

stream
    .on("data", function (d) {
        chunksRead.push(d);
    })
    .on("end", function () {
        tap.equals(chunksRead.length, 5, "Tailing 5 chunks from a 10 chunk stream results in 5 chunks"); 
        tap.deepEquals(chunksRead, testData.slice(-5), "Tailing 5 chunks from a 10 chunk stream results in the last 5 chunks that were written"); 
    });

testData.forEach((chunk) => {
    stream.write(chunk);
});
stream.end();


