"""
xxx
"""
from fastapi import FastAPI
from app.xgb import router as xgb_router

app = FastAPI()

app.include_router(xgb_router, prefix="/xgb", tags=["xgb"])
