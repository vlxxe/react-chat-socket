import { takeEvery, put, call, all, fork, delay } from "redux-saga/effects"
import { LOGIN_SUCCESS } from "./auth-reducer"
import { createSocket, socket } from "../../../socket/socket"

/* const socketTry = async () => {
  
} */

function* socketConnect() {
  yield fork(createSocket)
  /* const socket = io.connect(server) */
  /* const res = yield call(getTrendMovies);
  yield put(trendMoviesLoaded(res)); */
}

function* watchLoginSuccess() {
  yield takeEvery(LOGIN_SUCCESS, socketConnect)
}

export function* authRootSaga() {
  yield all([watchLoginSuccess()])
}
