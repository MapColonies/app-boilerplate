#!/bin/sh

set -e

node ../confd/generate-config.js --indocker --environment production

# Check if env-config.js contains "{{" or has size 0
if grep -q '{{' env-config.js || [ ! -s env-config.js ]; then
    echo "Error: env-config.js contains '{{' or is empty"
    exit 1
fi

# Check if index.html contains "{{" or has size 0
if grep -q '{{' index.html || [ ! -s index.html ]; then
    echo "Error: index.html contains '{{' or is empty"
    exit 1
fi

echo "Done with confd"

echo "Running NGINX ..."

nginx -g 'daemon off;'
