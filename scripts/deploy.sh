#!/bin/bash

echo "🔍 Checking for required env variables"

if [ -z "$DEPLOY_ENV" ]; then
  echo "❌ Missing DEPLOY_ENV"
  exit 1
fi

if [ -z "$DEPLOY_API_KEY" ]; then
  echo "❌ Missing DEPLOY_API_KEY"
  exit 1
fi

echo "🚀 Starting the deploy!"

sleep 3

echo "✅ Deploy finished!"