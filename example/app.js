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
