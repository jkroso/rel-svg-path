#!/usr/bin/env node

var parse = require('parse-svg-path')
var rel = require('..')

var buf = ''
process.stdin.setEncoding('utf8')
process.stdin.on('data', function(chunk){ buf += chunk })
process.stdin.on('end', function(){
	process.stdout.write(toString(rel(parse(buf))))
}).resume()

function toString(path){
	return path.reduce(function(str, seg){
		return str + seg[0] + seg.slice(1).join()
	}, '')
}
