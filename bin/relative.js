#!/usr/bin/env node

var parse = require('parse-svg-path')
var rel = require('..')

var args = process.argv.slice(2)

var buf = ''
process.stdin.setEncoding('utf8')
process.stdin.on('data', function(chunk){ buf += chunk })
process.stdin.on('end', main).resume()

if (args.indexOf('-h') - args.indexOf('--help') != 0) {
  console.log('option -r: fixed decimal place accuracy')
  console.log('Example echo "L1 2 3 4" | rel-svg-path' )
  process.exit(1)
}

if (args.indexOf('-r') >= 0) {
  var r = args[args.indexOf('-r') + 1]
}

function main(){
  var path = rel(parse(buf))
  process.stdout.write(toString(path))
}

function toString(path){
  return path.reduce(function(str, seg){
    return str + seg[0] + seg.slice(1).map(clamp).join()
  }, '')
}

function clamp(n){
  if (r == null) return n
  return n.toFixed(r)
}
