export interface AuthenticationRequest {
    login: string;
    password: string;
}

export const emptyAuthenticationRequest: () => AuthenticationRequest = () => ({
    login: '',
    password: '',
});
