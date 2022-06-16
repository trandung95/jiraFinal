import Axios from 'axios';
import { call, delay, fork, take, takeEvery, takeLates, put } from 'redux-saga/effects'
import { USER_SIGNIN_API } from '../../constants/JiraFinal';

//quản lý action saga
function * signinSaga(action) {
    console.log(action);
}
export function * theoDoiSignin() {
    yield takeLates(USER_SIGNIN_API, signinSaga);
}