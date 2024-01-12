# 使用官方的 Python 基础镜像
FROM python:3.9-slim-buster

# 设置工作目录
WORKDIR /app

# 将当前目录的内容复制到工作目录中
COPY . /app

# 安装 PostgreSQL 开发文件和其他必需的包
# 注意：python:3.9-slim-buster 基于 Debian Buster
RUN apt-get update \
    && apt-get install -y libpq-dev gcc \
    && rm -rf /var/lib/apt/lists/*

# 安装项目依赖
RUN pip install --no-cache-dir -r requirements.txt

# 暴露端口
EXPOSE 8000