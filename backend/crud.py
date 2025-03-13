from sqlalchemy.orm import Session
from models import User
from schemas import UserCreate, UserUpdate

def get_users(db: Session, skip: int = 0, limit: int = 10):
  return db.query(User).offset(skip).limit(limit).all()

def get_user(db: Session, user_id: int):
  return db.query(User).filter(User.id == user_id).first()

def create_user(db: Session, user: UserCreate):
  db_user = User(**user.dict())
  db.add(db_user)
  db.commit()
  db.refresh(db_user)
  return db_user

def delete_user(db: Session, user_id: int):
  user = db.query(User).filter(User.id == user_id).first()
  if user:
    db.delete(user)
    db.commit()
    return user_id

  return False

def update_user(db: Session, user_id: int, user_data: UserUpdate):
  user = db.query(User).filter(User.id == user_id).first()
  if not user:
    return None

  for key, value in user_data.dict().items():
    setattr(user, key, value)

  db.commit()
  db.refresh(user)
  return user
