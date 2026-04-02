from flask import Flask, jsonify
import psutil

app =  Flask(__name__)

@app.route('/')
def home():
    return "hello anh bac"
@app.route('/health')
def health_check():
    cpu = psutil.cpu_percent()
    ram = psutil.virtual_memory().percent
    return jsonify({"status": "healthy", "cpu_usage": f"{cpu}%", "ram_usage": f"{ram}%"})
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)