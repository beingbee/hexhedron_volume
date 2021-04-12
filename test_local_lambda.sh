#!/usr/bin/bash


for i in events/*.json; do
	echo "====================="
	echo "run $i"
	sam local invoke HexVolFunction -e $i
	echo 
done
