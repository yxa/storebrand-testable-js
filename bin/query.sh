#!/bin/sh
curl -i -H "Accept: application/json" http://localhost:4000/data/search.json\?q\=cat | ./node_modules/prettyjson/bin/prettyjson | less
