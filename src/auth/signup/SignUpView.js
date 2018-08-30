import React from "react";

const SignUpView = ({ onSubmit }) => {
    return (
        <div>
            <h3>Sign up</h3>
            <form onSubmit={onSubmit}>
                <label>
                    Email
                    <input
                        style={{ width: "100%" }}
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                </label>
                <label>
                    Password
                    <input
                        style={{ width: "100%" }}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpView;