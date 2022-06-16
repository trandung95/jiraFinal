import { all } from "redux-saga/effects";
import * as JiraFinal from './UserJiraFinalSaga'

export function* rootSaga() {
    yield all([
        //nghiệp vụ jira
        JiraFinal.theoDoiSignin()
    ])
}