#!/bin/bash

# Set output zip filename
OUTPUT="./dist/cifraclub-betterui.zip"

# Create the dist directory if it doesn't exist
mkdir -p ./dist

# Remove previous zip if it exists
rm -f "$OUTPUT"

# Create the zip file, excluding the "sample" folder
git ls-files | grep -v '^sample/' | zip -r "$OUTPUT" -@