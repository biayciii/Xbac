#!/usr/bin/env bash
set -e

APP_URL="http://localhost:8000/health"

STATUS=$(curl -s -o /dev/null -w "%{http_code}" $APP_URL)

if [ "$STATUS" -eq 200 ]; then
  echo "$(date) - HEALTH OK"
else
  echo "$(date) - HEALTH FAIL ($STATUS)"
fi