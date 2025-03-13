import { all, call, fork, put, takeLatest } from "redux-saga/effects"
import {
  getUsersRequest,
  getUsersRequestFailed,
  getUsersRequestSuccess,
  addUserRequest,
  addUserRequestFailure,
  addUserRequestSuccess
} from "./userSplice";

import type { IUser } from "./types";
import type { IUserForm } from "@/app/modalForms/addMember";

import { PayloadAction } from "@reduxjs/toolkit";

async function gets() {
  const response = await fetch("http://127.0.0.1:8000/users/");

  if (!response.ok) throw new Error("Failed to fetch user");

  return response.json();
};

async function post(payload: IUserForm) {
  const response = await fetch("http://127.0.0.1:8000/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) throw new Error("Failed to fetch user");

  return response.json();
}

function* getUsersSaga() {
  try {
    const users:IUser[] = yield call(gets);
    yield put(getUsersRequestSuccess(users))
  } catch (error) {
    yield put(getUsersRequestFailed((error as Error).message));
  }
};

function* addUserSaga(action: PayloadAction<IUser>) {
  try {
    const user:IUser = yield call(post, action.payload);
    yield put(addUserRequestSuccess(user))
  } catch (error) {
    yield put(addUserRequestFailure((error as Error).message));
  }
}

function* watchGetUsers() {
  yield takeLatest(getUsersRequest, getUsersSaga)
}

function* watchAddUser() {
  yield takeLatest(addUserRequest.type, addUserSaga)
}

export default function* rootSaga() {
  yield all([
    fork(watchGetUsers),
    fork(watchAddUser),
  ])
}
