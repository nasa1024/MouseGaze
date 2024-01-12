from sqlalchemy import Column, Integer, Float, BigInteger
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session

Base = declarative_base()

class BTCUSDT(Base):
    __tablename__ = "btcusdt"

    # Primary key
    id = Column(Integer, primary_key=True, index=True)

    # Time fields are often stored as BigInteger
    open_time = Column(BigInteger, index=True)
    open = Column(Float)
    high = Column(Float)
    low = Column(Float)
    close = Column(Float)
    volume = Column(Float)
    close_time = Column(BigInteger, index=True)
    quote_asset_volume = Column(Float)
    number_of_trades = Column(Integer)
    taker_buy_base_asset_volume = Column(Float)
    taker_buy_quote_asset_volume = Column(Float)


def get_btcusdt_in_time_range(db: Session, start_time: int, end_time: int) -> list:
    return db.query(BTCUSDT).filter(BTCUSDT.open_time >= start_time, BTCUSDT.open_time <= end_time).all()

def insert_btcusdt(db: Session, data: dict):
    db.add(BTCUSDT(**data))
    db.commit()
    db.close()