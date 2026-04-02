#!/bin/bash

CONTAINER_NAME="devops_web_app"
LOG_FILE="error_alerts.log"

echo "Bắt đầu giám sát log cho container: $CONTAINER_NAME"

# Theo dõi log real-time và lọc các dòng có chữ "ERROR" hoặc "Traceback"
docker logs -f $CONTAINER_NAME 2>&1 | awk '/ERROR|Traceback/ {
    print "[" strftime("%Y-%m-%d %H:%M:%S") "] PHÁT HIỆN LỖI: " $0 | "tee -a '$LOG_FILE'"
}'