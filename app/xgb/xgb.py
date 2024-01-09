'''
xxxx
'''
from fastapi import APIRouter
from typing import List
from xgboost import XGBClassifier
import joblib
import numpy as np

router = APIRouter()


@router.post("/")
async def read_root(data: List[int]) -> list:
    '''
    xxxx
    '''

    loaded_model = XGBClassifier()
    loaded_model.load_model('../../resource/xgboost_model_35_67.json')

    np_data = np.array(data)
    y_pred = loaded_model.predict(np_data)
    encoder = joblib.load('../../resource/label_encoder.joblib')
    predictions = encoder.inverse_transform([round(value) for value in y_pred])

    return predictions
