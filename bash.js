
let commands = require('./commands');
// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
	let cmd = data.toString().trim().split(' ')[0]; // remove the newline
	let args = data.toString().trim().split(' ').slice(1);

	// else {commands[cmd]()};
	if (cmd === 'pwd') commands.pwd();
	if (cmd === 'date') commands.date();
	if (cmd === 'ls') commands.ls();
	if (cmd === 'cat') commands.cat(args);
	if (cmd === 'head') commands.head(args);
	if (cmd === 'tail') commands.tail(args);
	if (cmd === 'sort') commands.sort(args);
	if (!commands[cmd]) commands.echo(args);

});