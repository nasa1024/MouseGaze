# 使用官方的 Python 基础镜像
FROM python:3.8-slim-buster

# 设置工作目录
WORKDIR /app

# 将当前目录的内容复制到工作目录中
COPY . /app

# 安装项目依赖
RUN pip install --no-cache-dir -r requirements.txt

# 暴露端口
EXPOSE 8000