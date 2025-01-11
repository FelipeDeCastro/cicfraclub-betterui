#!/bin/bash

# Set output zip filename
OUTPUT="cifraclub-betterui.zip"

# Remove previous zip if it exists
rm -f "$OUTPUT"

# Create the zip file, excluding the "sample" folder
git ls-files | grep -v '^sample/' | zip -r "$OUTPUT" -@