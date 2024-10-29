import { fetchRegistration, fetchRegistrationPin } from '@/utils/services';
import { LOADING, SET_REGISTER, SET_STEP } from './constants';

export function AddRegisterForm(data, callback) {
  return async (dispatch) => {
    dispatch(loadingAction(true));
    try {
      const res = await fetchRegistration(data);
      console.log(res.data.userId);
      dispatch(setRegisterData({ userId: res.data.userId }));
      dispatch(loadingAction(false));
      dispatch(setStep(4));
      callback('Berhasil registrasi');
    } catch (err) {
      dispatch(loadingAction(false));
    }
  };
}

export function AddPinForm(data, callback) {
  return async (dispatch) => {
    dispatch(loadingAction(true));
    try {
      await fetchRegistrationPin(data);
      dispatch(loadingAction(false));
      dispatch(setStep(6));
      callback('Berhasil registrasi pin');
    } catch (err) {
      dispatch(loadingAction(false));
    }
  };
}

export function setStep(step) {
  return { payload: step, type: SET_STEP };
}

export function setRegisterData(data) {
  return { payload: data, type: SET_REGISTER };
}

function loadingAction(isLoading) {
  return { isLoading, type: LOADING };
}
