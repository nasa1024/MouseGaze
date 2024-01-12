def feature(df):
    # Calculate RSI
    delta = df['close'].diff()
    gain = delta.where(delta > 0, 0)
    loss = -delta.where(delta < 0, 0)
    avg_gain = gain.rolling(window=14).mean()
    avg_loss = loss.rolling(window=14).mean()

    rs = avg_gain / avg_loss
    rsi = 100 - (100 / (1 + rs))

    # Calculate EMA
    ema_short = df['close'].ewm(span=12).mean()
    ema_long = df['close'].ewm(span=26).mean()

    # Calculate MACD
    macd = ema_short - ema_long
    signal_line = macd.ewm(span=9).mean()
    histogram = macd - signal_line

    # Add RSI, EMA, and MACD to the DataFrame
    df['rsi'] = rsi
    df['ema_short'] = ema_short
    df['ema_long'] = ema_long
    df['macd'] = macd
    df['signal_line'] = signal_line
    df['histogram'] = histogram

    df['sma_3'] = df['close'].rolling(window=3).mean()
    df['sma_6'] = df['close'].rolling(window=6).mean()
    df['sma_12'] = df['close'].rolling(window=12).mean()
    # 波动率
    df['volatility_std'] = df['close'].rolling(window=5).std()
    df['pct_change'] = df['close'].pct_change()
    df['sma_20'] = df['close'].rolling(window=20).mean()
    df['std_20'] = df['close'].rolling(window=20).std()
    df['bollinger_upper'] = df['sma_20'] + 2 * df['std_20']
    df['bollinger_middle'] = df['sma_20']
    df['bollinger_lower'] = df['sma_20'] - 2 * df['std_20']
    df['diff_bollinger_upper'] = df['close'] - df['bollinger_upper']
    df['diff_bollinger_lower'] = df['close'] - df['bollinger_lower']
    df['diff_sma_3'] = df['close'] - df['sma_3']
    df['diff_sma_6'] = df['close'] - df['sma_6']
    df['diff_sma_12'] = df['close'] - df['sma_12']
    return df
