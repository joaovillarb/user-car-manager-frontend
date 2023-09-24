import {getItemStorage, removeItemStorage, setItemStorage} from "./storage-proxy";
import {AUTHORIZATION_KEY} from "../constants/constants";

export const removeAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
  if (token) {
    setItemStorage(AUTHORIZATION_KEY, token);
  }
}

export const getAuthorizationToken = (): string => {
  return getItemStorage(AUTHORIZATION_KEY) ?? '';
};

export const hasAuthorizationToken = () => !!getAuthorizationToken();
