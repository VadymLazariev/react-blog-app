import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import SignIn from '../index';

describe('Sign in component', () => {

    const setup = () => {
        const submitSignInForm = jest.fn();
        const utils = render(<SignIn onSignInSubmit={submitSignInForm}/>)
        const email = utils.getByLabelText('email') as HTMLInputElement;
        const password = utils.getByLabelText('password') as HTMLInputElement;
        const submit = utils.getByLabelText('submit');
        return {
            email,
            password,
            submit,
            ...utils,
        }
    }

    test('It should check the email input onChange event', () => {
        const { email } = setup()
        fireEvent.change(email, { target: { value: 'test@gmail.com' } });
        expect(email.value).toBe('test@gmail.com');
    });

    test('It should check the password input onChange event', () => {
        const { password } = setup()
        fireEvent.change(password, { target: { value: 'password' } })
        expect(password.value).toBe('password')
    });

    test('It should submit form on button click', () => {
        const { submit } = setup();
        const signUpFormFixture = { email: 'email', password: 'password' };
        fireEvent.click(submit)
        expect(signUpFormFixture.email).toBe('email');
        expect(signUpFormFixture.password).toBe('password');
    });
})
