import { LOADING } from './constants';

export function fetchLogin(payload, cb) {
  return async (dispatch) => {
    dispatch(loadingAction(true));

    try {
      const { data } = await login(payload);
      setUserData(data.profile);
      dispatch(loadingAction(false));
    } catch (err) {
      const message = err.code >= 400 && err.code < 500 ? err.message : 'Username atau password yang anda masukkan salah';
      dispatch(loadingAction(false));
    }
  };
}

function loadingAction(isLoading) {
  return { type: LOADING, isLoading };
}
