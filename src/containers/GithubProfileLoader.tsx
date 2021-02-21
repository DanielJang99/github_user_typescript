import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GithubProfileInfo from "../components/GithubProfileInfo";
import GithubUsernameForm from "../components/GithubUsernameForm";
import { RootState } from "../modules";
import { getUserProfileAsync } from "../modules/github";

export default function GithubProfileLoader() {
    const { data, loading, error } = useSelector(
        (state: RootState) => state.github.userProfile
    );
    const dispatch = useDispatch();

    const onSubmitUsername = (username: string) => {
        dispatch(getUserProfileAsync.request(username));
    };
    return (
        <>
            <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
            {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
            {error && <p style={{ textAlign: "center" }}>Error!</p>}
            {data && (
                <GithubProfileInfo
                    bio={data.bio}
                    blog={data.blog}
                    name={data.name}
                    thumbnail={data.avatar_url}
                />
            )}
        </>
    );
}
