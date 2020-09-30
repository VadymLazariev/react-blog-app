import React, { useState } from 'react';
import { SignInProps } from './__types__/sign-in.types';

const SignIn: React.FunctionComponent<SignInProps> = (props) => {
    const [signInForm, setFormValue] = useState({ email: '', password: '' });

    const setEmail = (email: string) => {
        setFormValue({ ...signInForm, email });
    };

    const setPassword = (password: string) => {
        setFormValue({ ...signInForm, password });
    };

    const submitForm = (e: any) => {
        e.preventDefault();
        props.onSignInSubmit(signInForm);
    };

    return (
        <form action="">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={e => setEmail(e.target.value)} type="email" className="email form-control"
                       id="exampleInputEmail1" aria-describedby="emailHelp"
                       value={signInForm.email}
                       aria-label="email"
                       placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input onChange={e => setPassword(e.target.value)} type="password" className="form-control"
                       aria-label="password"
                       id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button aria-label="submit" onClick={e => submitForm(e)} className="btn btn-primary w-100">Sign In!</button>
        </form>
    );
}

export default SignIn;
