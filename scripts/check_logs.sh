#!/usr/bin/env bash

LOG_DIR="/opt/devops-beginner-project/logs"
mkdir -p "$LOG_DIR"

echo "Checking logs at $(date)" >> "$LOG_DIR/log-monitor.log"

docker logs devops-web --since 5m 2>&1 | grep -Ei "error|exception|failed|critical|traceback" >> "$LOG_DIR/log-monitor.log" || true