const
    tap = require("tap"),
    tailStream = require("../stream-tail");

const stream = tailStream(20);

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
        tap.equals(chunksRead.length, 10, "Tailing 20 chunks from a 10 chunk stream results in 10 chunks"); 
        tap.deepEquals(chunksRead, testData, "Tailing 20 chunks from a 10 chunk stream results in same chunks that were written"); 
    });

testData.forEach((chunk) => {
    stream.write(chunk);
});
stream.end();


