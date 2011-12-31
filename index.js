var fs = require('fs');
var jade = require('jade');
var wrap = function(content,jadeModule){
   return 'var jade = require(\''+jadeModule+'\'); module.exports = ' + content;
};
require.extensions['.jade'] = function(module,filename){
    var source = wrap(jade.compile(fs.readFileSync(filename,'utf8'),{client:true,compileDebug:false,filename:filename}).toString(),__dirname+'/runtime.js');
    module._compile(source,filename);

};
module.exports = function(bundle){
  bundle.register('.jade',function(body,file){
    return wrap(jade.compile(body,{client:true,compileDebug:false,filename:file}).toString(),'require-jade');
  });
};
