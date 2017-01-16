let fs = require('fs');
let request = require('request');

module.exports = {
	pwd: function() {
		process.stdout.write('Current working directory: ' + process.cwd());
		process.stdout.write('\nprompt > ');
	},
	date: function() {
		let date = new Date();
		process.stdout.write(date.toString());
		process.stdout.write('\nprompt > ');		
	},
	echo: function(args) {
		process.stdout.write(args.join(' '));
		process.stdout.write('\nprompt > ');
	},
	ls: function() {
		fs.readdir('./notfound', function(err, file) {  // function( 'nothing was found', []) 
			if (err) console.log(err);
			files.forEach(function(file) {
				process.stdout.write(file.toString() + "\n");
			});
			process.stdout.write("prompt > ");
		});
	},
	cat: function(file) {
		fs.readFile(file.toString(), function(err, contents) {
			if (err) throw err;
			process.stdout.write(contents.toString() + '\n');
			process.stdout.write("prompt > ");
		});
	},
	head: function(file){
		fs.readFile(file.toString(), function(err, contents) {
			if (err) throw err;
			let firstFiveLines = contents.toString().split('\n').slice(0,5);
			process.stdout.write(firstFiveLines.join('\n') + '\n');
			process.stdout.write("prompt > ");
		});
	},
	tail: function(file){
		fs.readFile(file.toString(), function(err, contents) {
			if (err) throw err;
			let lastFiveLines = contents.toString().split('\n').slice(-6);
			process.stdout.write(lastFiveLines.join('\n') + '\n');
			process.stdout.write("prompt > ");
		});
	},
	sort: function(file) {
		fs.readFile(file.toString(), function(err, contents) {
			if (err) throw err;
			let sortedLines = contents.toString().split('\n').sort();
			process.stdout.write(sortedLines.join('\n') + '\n');
			process.stdout.write("prompt > ");
		});
	}
}





