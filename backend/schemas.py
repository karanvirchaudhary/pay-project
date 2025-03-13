from pydantic import BaseModel
from typing import Optional
from datetime import date

class UserBase(BaseModel):
  id: int
  first_name: str
  last_name: str
  user_name: str
  date_of_birth: date

class UserCreate(UserBase):
  pass

class UserResponse(UserBase):
  pass

  class Config:
    orm_mode = True

class UserUpdate(BaseModel):
  first_name: Optional[str] = None
  last_name: Optional[str] = None
  user_name: Optional[str] = None
  date_of_birth: Optional[date] = None
