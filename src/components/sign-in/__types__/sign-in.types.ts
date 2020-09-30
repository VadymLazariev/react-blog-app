import { SignInModel } from '../../../shared/models/sign-in.model';

export type SignInProps = {
    onSignInSubmit: (formValue: SignInModel) => void;
}
