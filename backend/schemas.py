from pydantic import BaseModel, EmailStr
from datetime import date

class UserBase(BaseModel):
  first_name: str
  last_name: str
  user_name: str
  date_of_birth: date

class UserCreate(UserBase):
  pass

class UserResponse(UserBase):
  id: int

  class Config:
    orm_mode = True
