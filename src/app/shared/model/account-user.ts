import {Car} from "./car";

export interface AccountUser {
    id: number | null;
    firstName: string;
    lastName: string;
    email: string;
    birthday: string;
    login: string;
    password?: string | null;
    phone: string;
    cars: Car[];
    lastLogin?: string | null;
    createdAt?: string | null;
    active: boolean | null;
}

export const emptyAccountUser: () => AccountUser = () => ({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    birthday: "",
    login: "",
    password: null,
    phone: "",
    cars: [],
    lastLogin: null,
    createdAt: null,
    active: null,
});
