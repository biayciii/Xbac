# Sử dụng base image Python nhẹ nhàng
FROM python:3.10-slim
# Đặt thư mục làm việc trong container
WORKDIR /test

# Copy file requirements và cài đặt dependencies
COPY tai.txt .
RUN pip install --no-cache-dir -r tai.txt

# Copy toàn bộ source code vào container
COPY . .

# Expose port 5000
EXPOSE 5000

# Lệnh chạy ứng dụng
CMD ["python", "test.py"]