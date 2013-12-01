
serve: node_modules
	@node_modules/serve/bin/serve -Slojp 0

test: node_modules
	@sed "s/'rel-svg-path'/'.\/'/" < Readme.md \
		| node_modules/jsmd/bin/jsmd

node_modules: *.json
	@packin install -Re \
		--meta deps.json,package.json,component.json \
		--folder node_modules

install:
	npm install
	ln -s "$(PWD)/bin/relative.js" /usr/local/bin/rel-svg-path

.PHONY: serve test install
