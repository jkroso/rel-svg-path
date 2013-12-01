
# rel-svg-path

  Define a path using only relative points. Most SVG drawing tools will export paths using absolute points though it can be nicer to tweak them manually when all the points are relative.

## Programatic Usage

With your favourite package manager:

- [packin](//github.com/jkroso/packin): `packin add jkroso/rel-svg-path`
- [component](//github.com/component/component#installing-packages): `component install jkroso/rel-svg-path`
- [npm](//npmjs.org/doc/cli/npm-install.html): `npm install rel-svg-path`

then in you code:

```js
var rel = require('rel-svg-path')
rel([['M',10,20],['L',50, 40]]) // => [['m',10,20],['l',40,20]]
```

## Command line usage

  Installation:

```sh
git clone https://github.com/jkroso/rel-svg-path.git
cd rel-svg-path
make install
```

  Then just pipe path data to it:

```sh
echo "M10 20 50 40" | rel-svg-path
```

## Running the tests

Just run `make` and navigate your browser to [test/index.html](test/index.html)
