import ncp from 'ncp'



ncp('src/public/templates', 'build/public/templates', function (err) {
	if (err) {
		return console.error(err);
	}
	console.log('Files copied!');
});
