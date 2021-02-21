import {
    getUserProfileAsync,
    GET_USER_PROFILE,
    GET_USER_PROFILE_ERROR,
} from "./action";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUserProfile, GithubProfile } from "../../api/github";

function* getUserProfileSaga(
    action: ReturnType<typeof getUserProfileAsync.request>
) {
    console.log(action);
    try {
        const userProfile: GithubProfile = yield call(
            getUserProfile,
            action.payload
        );
        yield put(getUserProfileAsync.success(userProfile));
    } catch (e) {
        yield put(getUserProfileAsync.failure(e));
    }
}

export function* githubSaga() {
    yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
