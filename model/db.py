from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .spot import Base

SQLALCHEMY_DATABASE_URL = "postgresql://postgres:mousegaze666@localhost:5432/postgres"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()