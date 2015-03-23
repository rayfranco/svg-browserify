var fs = require('fs'),
	assert = require('chai').assert,
	lib = require('../index');	


var exportedSVG = __dirname + "/template.js";
	exportedHBS = __dirname + "/template-hbs.js";

module.exports = {

	beforeEach : function(){
	},

	'Transform' : {
		'SVG' : {
			'Should return stringified SVG' : function(done){
				
				fs.createReadStream(__dirname + '/test.svg')
				.pipe(lib(__dirname + '/test.svg'))
				.pipe(fs.createWriteStream(exportedSVG))
				.on("close", function () {
				  var template = require(exportedSVG);
				  assert.equal(template, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <rect x="10" y="10" height="100" width="100" style="stroke:#ff0000; fill: #0000ff"/>\n</svg>');
				  done();
				});
				
			}
		}
	}



}