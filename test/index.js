var requireJade = require('../index.js');
var index = require(__dirname+'/index.jade');
var should = require('should');
var fs = require('fs');
describe('requireJade',function(){
    it('should be a function',function(){
        requireJade.should.be.an.instanceof(Function);
    });
    it('should have one argument',function(){
        requireJade.length.should.equal(1);
    });
    it('should register jade on object passed in',function(){
        var MockBundle = function(){
            this.registeredExtensions = {};
        };
        MockBundle.prototype.register = function(ext,theFunction){
            this.registeredExtensions[ext] = theFunction;
        };
        MockBundle.prototype.require = function(fileName){
            return this.registeredExtensions['.jade'](fs.readFileSync(fileName,'utf8'),fileName).replace('require-jade','../runtime.js');
        };
        var bundle = new MockBundle();
        requireJade(bundle);
        bundle.registeredExtensions['.jade'].should.be.an.instanceof(Function);
        describe('bundle',function(){
           it('should be able to require .jade files',function(){
             eval(bundle.require(__dirname+'/index.jade'))({name: 'require-jade'}).should.equal('<p>Hello require-jade</p>')
           })
        });
    });
})
describe('index',function(){
   it('should be a function',function(){
       index.should.be.an.instanceof(Function);
   });
   it('should have 4 arguments',function(){
       index.length.should.equal(4);
   });
   it('should generate html',function(){
     index({name:'require-jade'}).should.equal('<p>Hello require-jade</p>');
   });
});