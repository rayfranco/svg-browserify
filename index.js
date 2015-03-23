var through = require('through');

module.exports = function(file) {

	var buffer = '';

	if (!/\.svg/.test(file)) {
		return through();
	} else {
		return through(function(chunk) {

			return buffer += chunk.toString();

		}, function() {
			
			var jst = buffer.toString(),
				compiled = 'module.exports = ';

			compiled += JSON.stringify(jst);
			compiled += ';\n';
			
			this.queue(compiled);
			return this.queue(null);

		});

	}
	
}