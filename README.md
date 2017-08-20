# stream-tail

Emits the last few chunks of input

[![Build Status](https://travis-ci.org/cttttt/stream-tail.svg?branch=master)](https://travis-ci.org/cttttt/stream-tail)

# Example

```javascript
const
    split2 = require("split2"),
    join = require("join-stream"),
    tail = require("stream-tail");

// Simple implementation of tail(1)

if (process.argv.length !== 3) {
    console.error(`Usage: tail NUMBER`);
    process.exit(1);
}

process.stdin
    .pipe(split2())
    .pipe(tail(process.argv[2]))
    .pipe(join("\n", { end: true }))
    .pipe(process.stdout);
```

# Methods

## tail(count)

Return an object stream that emits no more than the final `count` `'data'` chunks of its input.  Where the input contains fewer than `count` chunks, all chunks are emitted.


# Install

```bash
npm install stream-tail
```

# License

MIT
