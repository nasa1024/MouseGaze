from binance.spot import Spot
from conf.conf import config


api_key = config['keys']['api_key']
api_secret = config['keys']['api_secret']


client = Spot(api_key=api_key, api_secret=api_secret)


def get_klines_from_time(symbol, interval, start_time, end_time):

    klines = client.klines(
        symbol, interval, startTime=start_time, endTime=end_time)

    print(f"当前获取数据时间为：{start_time}", sep="\r")
    print(f"当前获取数据时间为：{end_time}", sep="\r")
    print(f"当前获取数据时间为：{len(klines)}", sep="\r")
    print(klines)

    return klines
