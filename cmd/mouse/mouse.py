"""
模型服务启动文件
"""
from fastapi import FastAPI
from app.xgb.xgb import router as xgb_router

app = FastAPI()

# 探活接口
@app.get("/")
async def root():
    return {"message": "Hello MOUSE!"}

app.include_router(xgb_router, prefix="/xgb", tags=["xgb"])
