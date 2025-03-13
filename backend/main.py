from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session
from models import User, Base
from crud import (
  create_user,
  delete_user,
  get_user,
  get_users,
  update_user
)
from schemas import UserBase, UserCreate, UserResponse, UserUpdate, UserDeleteResponse
from database import engine, get_db


app = FastAPI()

origins = [
  "http://localhost:3000"
]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

@app.get("/")
async def root():
  return {"message": "Hello World"}

@app.get("/users/", response_model=list[UserResponse])
def read_users(db: Session = Depends(get_db)):
  return get_users(db)

@app.get("/users/{user_id}", response_model=UserResponse)
def read_user(user_id: int, db: Session = Depends(get_db)):
  user = get_user(db, user_id)
  if user is None:
    raise HTTPException(status_code=404, detail="User not found")

  return user

@app.post("/users/", response_model=UserResponse)
def create_new_user(user: UserCreate, db: Session = Depends(get_db)):
  return create_user(db, user)

@app.delete("/users/{user_id}", response_model=UserDeleteResponse)
def deleteUser(user_id: int, db: Session = Depends(get_db)):
  return delete_user(db, user_id)

@app.patch("/users/{user_id}", response_model=UserResponse)
def update_user_by_id(user_id: int, user_data: UserUpdate, db: Session = Depends(get_db)):
  updated_user = update_user(db, user_id, user_data)
  if updated_user is None:
    raise HTTPException(status_code=404, detail="User not found")

  return updated_user
