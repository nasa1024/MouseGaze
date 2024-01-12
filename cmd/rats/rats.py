"""
数据服务启动文件
"""
from fastapi import FastAPI
from app.gaze.gaze import router as gaze_router

app = FastAPI()


# 探活接口
@app.get("/")
async def root():
    return {"message": "Hello RATS!"}

app.include_router(gaze_router, prefix="/gaze", tags=["gaze"])
