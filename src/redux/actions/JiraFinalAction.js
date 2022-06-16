import { USER_SIGNIN_API } from "../constants/JiraFinal"

export const signInJiraFinalAction = (userName, password) => {
    return {
        type: USER_SIGNIN_API,
        userLogin: {
            userName: userName,
            password: password
        }
    }
}