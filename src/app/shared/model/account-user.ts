import {Car} from "./car";

export interface AccountUser {
    id: number;
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
}

export const emptyAccountUser: () => AccountUser = () => ({
    id: 0,
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
});
