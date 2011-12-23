[![Build Status](https://secure.travis-ci.org/jgautier/require-jade.png)](http://travis-ci.org/jgautier/require-jade)
# Require your jade templates in node and the browser via browserify.
## Usage
### Server
    //requiring 'require-jade' enables requiring .jade templates in node
    var requireJade = require('require-jade')
       ,bundle = require('browserify')()
       ,express = require('express')
       ,app = express.createServer();

    //tell browserify to use require-jade which enables client side requires
    bundle.use(requireJade);
    bundle..addEntry((__dirname + '/client.js'));

    app.use(bundle);
    app.get('/',function(req,res){
       res.end(require('./layout.jade')());
    });
    app.listen(8080);
### Client
    var template = require('./template.jade');
    document.body.innerHTML = template();
### template.jade
    h1 it worked!
Check the example folder for a working example.
    node example/app.js
Then browse to http://localhost:8080
## Installation
    npm install require-jade
## License

(The MIT License)

Copyright (c) 2011 Julian Gautier <julian.gautier@alumni.neumont.edu>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.