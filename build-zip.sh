#!/bin/bash

# Create the dist directory if it doesn't exist
mkdir -p ./dist

# Remove previous zip if it exists
rm -f "$OUTPUT"

# Increment the version in manifest.json
CURRENT_VERSION=$(jq -r '.version' manifest.json)
IFS='.' read -r major minor patch <<< "$CURRENT_VERSION"
patch=$((patch + 1))
NEW_VERSION="$major.$minor.$patch"
jq ".version = \"$NEW_VERSION\"" manifest.json > tmp.json && mv tmp.json manifest.json

# Set output zip filename
OUTPUT="./dist/cifraclub-betterui-v$NEW_VERSION.zip"

# Create the zip file, excluding the "sample" folder
git ls-files | grep -v '^sample/' | zip -r "$OUTPUT" -@