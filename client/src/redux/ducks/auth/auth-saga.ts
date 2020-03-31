import { takeEvery, put, call, all } from "redux-saga/effects"
import { LOGIN_SUCCESS } from "./auth-reducer"

/* function* workerSet() {
  const res = yield call(getTrendMovies);
  yield put(trendMoviesLoaded(res));
}

function* watchLoginSuccess() {
  yield takeEvery(LOGIN_SUCCESS, workerFetchTrendMovies);
} */

/* export function* authRootSaga() {
  yield all([watchLoginSuccess()]);
} */
