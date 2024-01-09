"""
数据服务启动文件
"""
from fastapi import FastAPI

app = FastAPI()

# 探活接口
@app.get("/")
async def root():
    return {"message": "Hello RATS!"}
