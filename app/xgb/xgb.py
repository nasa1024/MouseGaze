'''
xgb.py
使用xgb模型进行预测
'''
from fastapi import APIRouter
from typing import List
from xgboost import XGBClassifier
import joblib
import numpy as np

router = APIRouter()


@router.post("/")
async def read_root(data: List) -> list:
    '''
    xxxx
    '''

    loaded_model = XGBClassifier()
    loaded_model.load_model('/app/resource/xgboost_model_35_67.json')

    np_data = np.array(data)
    np_data = np_data.reshape(1, -1)
    y_pred = loaded_model.predict(np_data)
    encoder = joblib.load('/app/resource/label_encoder.joblib')
    predictions = encoder.inverse_transform([round(value) for value in y_pred])

    return predictions.tolist()