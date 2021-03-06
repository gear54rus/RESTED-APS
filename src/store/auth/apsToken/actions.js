import {
  INIT_FROM_HASH,
  SET_AUTO_REFRESH,
  TOKEN_CHANGED,
  SET_TOKEN_EXPIRED,
  TOKEN_REFRESH_REQUESTED,
  COPY_CURL,
} from './types';

export function initFromURLHash(hashObject) {
  return { type: INIT_FROM_HASH, hashObject };
}

export function setAutoRefresh(autoRefresh) {
  return { type: SET_AUTO_REFRESH, autoRefresh: Boolean(autoRefresh) };
}

export function tokenChanged(value) {
  return { type: TOKEN_CHANGED, value, time: (new Date()).getTime() };
}

export function setTokenExpired(tokenExpired) {
  return { type: SET_TOKEN_EXPIRED, tokenExpired: Boolean(tokenExpired) };
}

export function refreshToken() {
  return { type: TOKEN_REFRESH_REQUESTED };
}

export function copyCurl() {
  return { type: COPY_CURL };
}
