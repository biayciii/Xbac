#!/bin/bash

# Tên image và container
IMAGE_NAME="biaycii/my-devops:latest"
CONTAINER_NAME="devops_web_app"

echo "Đang pull image mới nhất từ Docker Hub..."
docker pull $IMAGE_NAME

echo "Dừng và xóa container cũ (nếu có)..."
docker stop $CONTAINER_NAME || true
docker rm $CONTAINER_NAME || true

echo "Khởi chạy container mới..."
docker run -d -p 5000:5000 --name $CONTAINER_NAME --restart unless-stopped $IMAGE_NAME

echo "Triển khai hoàn tất! Ứng dụng đang chạy ở port 5000."