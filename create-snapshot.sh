#!/bin/bash

# first we need to have d8
# https://www.notion.so/ssen/V8-Engine-d8-d2706acc3c1b44a397a005c11af48c22

scope=$1

if [[ -z $scope ]]; then
  scope="./"**;
fi

for file in $(find $scope"/"*".js"); do
  echo "[run] $file";
  snapdir="${file%.*}";

  if [[ -d $snapdir ]]; then
    rm -rf $snapdir;
  fi

  mkdir -p $snapdir;
  $D8_PATH/d8 --allow-natives-syntax $file > $snapdir/r.snap;

  exitCode=$?;
  if [[ $exitCode > 0 ]]; then
    echo -e "\033[31m[failed] $file";
    cat $snapdir/r.snap;
    exit 1;
  else
    node snapshot-parser.js $snapdir/r.snap;
  fi
done