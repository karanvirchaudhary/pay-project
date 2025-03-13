from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

load_dotenv()

# Update DATABASE_URL to point to your Neon PostgreSQL instance
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://neondb_owner:npg_qI6S4JBAlDuL@ep-snowy-flower-a8yskcgm-pooler.eastus2.azure.neon.tech/neondb?sslmode=require")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
  db = SessionLocal()
  try:
    yield db
  finally:
    db.close()
