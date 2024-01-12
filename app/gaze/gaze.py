from fastapi import APIRouter
from typing import List
from model.spot import get_btcusdt_in_time_range
from model.db import get_db
import time
from controller.spot import get_klines_from_time
import pandas as pd
from controller.feature import feature
from model.spot import insert_btcusdt

router = APIRouter()


@router.post("/price")
async def price(data: List[int]) -> list:
    '''
    获取价格
    '''

    # 查询数据库的数据
    record = get_btcusdt_in_time_range(get_db, data[0], data[1])
    return {"data": record}


@router.post("/markers")
async def markers(data: List[float]) -> list:
    '''
    获取标记
    '''
    now = int(time.time() * 1000)
    # 计算1,020分钟之前
    before_1020_min = now - 60000 * 88 * 15

    data = get_klines_from_time('BTCUSDT', '15m', before_1020_min, now)
    # 判断数据库是否有数据
    for i in data:
        # 判断数据库是否有数据
        if get_btcusdt_in_time_range(get_db, i[0], i[6]):
            continue
        # 插入数据
        insert_btcusdt(get_db, {
            'open_time': i[0],
            'open': i[1],
            'high': i[2],
            'low': i[3],
            'close': i[4],
            'volume': i[5],
            'close_time': i[6],
            'quote_asset_volume': i[7],
            'number_of_trades': i[8],
            'taker_buy_base_asset_volume': i[9],
            'taker_buy_quote_asset_volume': i[10]
        })

    df = pd.DataFrame(data, columns=['open_time', 'open', 'high', 'low', 'close', 'volume', 'close_time',
                      'quote_asset_volume', 'number_of_trades', 'taker_buy_base_asset_volume', 'taker_buy_quote_asset_volume', 'ignore'])
    df = df.astype(float)
    df = feature(df)
    # 获取最后68行的数据
    df = df.tail(68)

    # 将数据平铺
    df = df.values.flatten()

    return {"data": df}
