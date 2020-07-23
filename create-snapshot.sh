#!/bin/bash

# first we need to have d8
# https://www.notion.so/ssen/V8-Engine-d8-d2706acc3c1b44a397a005c11af48c22

for file in $(find ./**/*.js); do
  $D8_PATH/d8 --allow-natives-syntax $file > $file.snap;
  node snapshot-parser.js $file.snap;
done