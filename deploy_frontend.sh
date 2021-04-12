#!/usr/bin/bash

echo "Commit and Push to github"
git add www/src/config.js
git commit -m "config.js updated"
git push
