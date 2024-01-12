from fastapi import APIRouter
from typing import List

router = APIRouter()


@router.post("/predict")
async def read_root(data: List[float]) -> list:
    '''
    xxxx
    '''
    return {"message": "Hello RATS!"}
