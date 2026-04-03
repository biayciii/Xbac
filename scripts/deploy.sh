#!/usr/bin/env bash
set -e

echo "Pull latest code..."
git pull origin main

echo "Rebuild and restart containers..."
docker compose down
docker compose up --build -d

echo "Remove dangling images..."
docker image prune -f

echo "Deployment completed."