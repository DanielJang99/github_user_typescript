import React, { ChangeEvent, FormEvent, useState } from "react";
import "./GithubUsernameForm.css";

type GithubUsernameFormProps = {
    onSubmitUsername: (username: string) => void;
};

export default function GithubUsernameForm({
    onSubmitUsername,
}: GithubUsernameFormProps) {
    const [input, setInput] = useState("");
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitUsername(input);
    };
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };
    return (
        <form onSubmit={onSubmit} className="GithubUsernameForm">
            <input
                onChange={onChange}
                value={input}
                placeholder="Type in github username"
            />
            <button type="submit">Search</button>
        </form>
    );
}
