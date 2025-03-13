from sqlalchemy import Column, Integer, String, TIMESTAMP, func, Date
from database import Base

class User(Base):
  __tablename__ = "users"

  id = Column(Integer, primary_key=True, index=True)
  first_name = Column(String(100), nullable=False)
  last_name = Column(String(100), nullable=False)
  user_name = Column(String(100), unique=True, nullable=False)
  date_of_birth = Column(Date, nullable=False)
  created_at = Column(TIMESTAMP, server_default=func.current_timestamp())
  updated_at = Column(TIMESTAMP, server_default=func.current_timestamp())
