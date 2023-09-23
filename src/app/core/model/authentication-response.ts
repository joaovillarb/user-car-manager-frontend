export class AuthenticationResponse {

    constructor(private _token: string) {
    }

    public get token(): string {
        return "Bearer " + this._token;
    }
}
