# DevOps Beginner Project 🌱

Dự án này xây dựng một hệ thống DevOps cơ bản cho người mới bắt đầu, bao gồm Docker hóa ứng dụng web, CI/CD bằng GitHub Actions, script tự động triển khai, giám sát log và dashboard theo dõi sức khỏe server bằng Prometheus.

---

## 1. Mục tiêu dự án

Dự án được thiết kế nhằm giúp người học làm quen với các kỹ năng DevOps nền tảng:

- Xây dựng một ứng dụng web đơn giản bằng FastAPI.
- Docker hóa ứng dụng bằng Dockerfile.
- Quản lý nhiều service bằng Docker Compose.
- Tích hợp Prometheus để thu thập metrics.
- Tích hợp Node Exporter để giám sát tài nguyên server.
- Viết script tự động kiểm tra health, log và triển khai.
- Thiết lập pipeline CI/CD bằng GitHub Actions.
- Viết test tự động cho ứng dụng.

---

## 2. Công nghệ sử dụng

| Công nghệ      | Vai trò                          |
| -------------- | -------------------------------- |
| FastAPI        | Xây dựng web API                 |
| Uvicorn        | Chạy server cho FastAPI          |
| Docker         | Đóng gói ứng dụng                |
| Docker Compose | Chạy nhiều service cùng lúc      |
| Prometheus     | Thu thập metrics giám sát        |
| Node Exporter  | Thu thập metrics hệ thống/server |
| Pytest         | Kiểm thử ứng dụng                |
| GitHub Actions | Tự động hóa CI/CD                |
| Shell Script   | Tự động hóa thao tác vận hành    |

---

## 4. Chức năng chính

### 4.1. Ứng dụng web FastAPI

Ứng dụng cung cấp các endpoint cơ bản:

| Endpoint   | Chức năng                                 |
| ---------- | ----------------------------------------- |
| `/`        | Kiểm tra ứng dụng đang chạy               |
| `/health`  | Kiểm tra trạng thái sức khỏe của ứng dụng |
| `/metrics` | Cung cấp metrics cho Prometheus thu thập  |

---

### 4.2. Docker hóa ứng dụng

Ứng dụng được đóng gói bằng Dockerfile. Khi chạy Docker Compose, hệ thống sẽ tự động build image và tạo container cho ứng dụng.

---

### 4.3. Giám sát bằng Prometheus

Prometheus được cấu hình để lấy dữ liệu từ:

- Ứng dụng FastAPI qua endpoint `/metrics`.
- Node Exporter để lấy thông tin CPU, RAM, disk, network của server.

---

### 4.4. Script vận hành

Thư mục `scripts/` chứa các file hỗ trợ vận hành:

| Script            | Chức năng                               |
| ----------------- | --------------------------------------- |
| `deploy.sh`       | Build và triển khai hệ thống            |
| `check_health.sh` | Kiểm tra trạng thái health của ứng dụng |
| `check_logs.sh`   | Xem log container                       |

---

### 4.5. CI/CD bằng GitHub Actions

File `.github/workflows/ci-cd.yml` dùng để tự động hóa quy trình:

1. Checkout source code.
2. Cài đặt Python.
3. Cài thư viện từ `requirements.txt`.
4. Chạy test bằng `pytest`.
5. Build Docker image.

Pipeline giúp phát hiện lỗi sớm mỗi khi có thay đổi mã nguồn.

---

## 5. Yêu cầu cài đặt

Trước khi chạy dự án, cần cài đặt:

- Docker Desktop
- Docker Compose
- Git
- Python 3.10 hoặc mới hơn nếu muốn chạy local không dùng Docker
- Visual Studio Code hoặc một IDE bất kỳ

Kiểm tra Docker:

```bash
docker --version
docker compose version
```

---

## 6. Cách chạy dự án bằng Docker Compose

Tại thư mục gốc của project, chạy lệnh:

```bash
docker compose up -d --build
```

Ý nghĩa:

| Thành phần          | Ý nghĩa                                          |
| ------------------- | ------------------------------------------------ |
| `docker compose up` | Khởi động các service trong `docker-compose.yml` |
| `-d`                | Chạy ở chế độ nền                                |
| `--build`           | Build lại image trước khi chạy                   |

---

## 7. Kiểm tra container sau khi chạy

```bash
docker compose ps
```

Hoặc:

```bash
docker ps
```

Nếu các container có trạng thái `Up` nghĩa là hệ thống đã chạy thành công.

---

## 8. Các địa chỉ truy cập

Sau khi chạy thành công, có thể mở trình duyệt và truy cập:

| Thành phần            | Địa chỉ                       |
| --------------------- | ----------------------------- |
| Web App               | http://localhost:8000         |
| Health Check          | http://localhost:8000/health  |
| Metrics App           | http://localhost:8000/metrics |
| Prometheus            | http://localhost:9090         |
| Node Exporter Metrics | http://localhost:9100/metrics |

Trong Prometheus, vào:

```text
Status → Targets
```

Nếu target hiển thị trạng thái `UP`, nghĩa là Prometheus đã thu thập metrics thành công.

---

## 9. Xem log hệ thống

Xem log toàn bộ service:

```bash
docker compose logs -f
```

Xem log riêng ứng dụng:

```bash
docker compose logs -f app
```

Nếu service ứng dụng trong `docker-compose.yml` có tên khác `app`, hãy thay `app` bằng đúng tên service.

---

## 10. Dừng hệ thống

Dừng container:

```bash
docker compose down
```

Dừng và xóa cả volume:

```bash
docker compose down -v
```

Chỉ dùng `-v` khi muốn reset sạch dữ liệu.

---

## 11. Chạy ứng dụng local không dùng Docker

Tạo môi trường ảo:

```bash
python -m venv venv
```

Kích hoạt môi trường ảo trên Windows PowerShell:

```powershell
.\venv\Scripts\activate
```

Cài thư viện:

```bash
pip install -r requirements.txt
```

Chạy ứng dụng:

```bash
uvicorn app.main:app --reload
```

Truy cập:

```text
http://localhost:8000
```

Chạy test:

```bash
pytest
```

---

## 12. Lỗi thường gặp và cách sửa

### 12.1. Lỗi container name already in use

Nếu gặp lỗi:

```text
Conflict. The container name "/node-exporter" is already in use
```

Nguyên nhân là máy đã có container tên `node-exporter` từ lần chạy trước hoặc từ project khác.

Cách sửa nhanh:

```bash
docker rm -f node-exporter
docker compose up -d --build
```

Nếu không muốn xóa container cũ, hãy đổi tên container trong `docker-compose.yml`, ví dụ:

```yaml
container_name: devops1-node-exporter
```

Nếu port `9100` bị trùng, đổi port:

```yaml
ports:
  - "9110:9100"
```

Sau đó truy cập Node Exporter bằng:

```text
http://localhost:9110/metrics
```

---

### 12.2. Lỗi port đã được sử dụng

Nếu port `8000`, `9090` hoặc `9100` bị chiếm, kiểm tra container đang chạy:

```bash
docker ps
```

Dừng container không cần thiết:

```bash
docker stop <container_id>
```

Hoặc đổi port trong file `docker-compose.yml`.

---

### 12.3. Lỗi không vào được app

Kiểm tra log:

```bash
docker compose logs -f app
```

Kiểm tra trạng thái container:

```bash
docker compose ps
```

Kiểm tra endpoint health:

```bash
curl http://localhost:8000/health
```

---

## 13. Các lệnh vận hành nhanh

| Mục đích                             | Lệnh                           |
| ------------------------------------ | ------------------------------ |
| Build và chạy hệ thống               | `docker compose up -d --build` |
| Xem container                        | `docker compose ps`            |
| Xem log                              | `docker compose logs -f`       |
| Xem log app                          | `docker compose logs -f app`   |
| Dừng hệ thống                        | `docker compose down`          |
| Reset dữ liệu                        | `docker compose down -v`       |
| Chạy test                            | `pytest`                       |
| Xóa container node-exporter bị trùng | `docker rm -f node-exporter`   |

---

## 14. Quy trình vận hành đề xuất

Quy trình vận hành hệ thống gồm các bước:

1. Developer chỉnh sửa source code trong thư mục `app/`.
2. Chạy test bằng `pytest`.
3. Build và chạy hệ thống bằng Docker Compose.
4. Kiểm tra trạng thái ứng dụng qua endpoint `/health`.
5. Kiểm tra metrics tại endpoint `/metrics`.
6. Mở Prometheus để theo dõi các target.
7. Xem log container khi có lỗi.
8. Push code lên GitHub để kích hoạt pipeline CI/CD.

---

## 15. Kết luận

Dự án này mô phỏng một quy trình DevOps cơ bản nhưng đầy đủ cho người mới bắt đầu. Thông qua dự án, người học có thể hiểu cách Docker hóa ứng dụng, triển khai bằng Docker Compose, kiểm thử tự động, tích hợp CI/CD và giám sát hệ thống bằng Prometheus.

Đây là nền tảng quan trọng để phát triển các hệ thống lớn hơn như microservices, Kubernetes, logging tập trung bằng ELK Stack và dashboard nâng cao bằng Grafana.
