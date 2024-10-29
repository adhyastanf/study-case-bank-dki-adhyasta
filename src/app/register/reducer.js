import { DATA_FETCHED, FAILED, LOADING, RESET_REGISTER_DATA, SET_REGISTER, SET_STEP } from './constants';

const initialState = {
  isLoading: false,
  message: '',
  step: 1,
  user: {
    userId:'',
    name: '',
    email: '',
    phone: '',
    otp: '',
    pin: '',
    confirm_pin: '',
  },
};

export default function reducer(state = initialState, action = {}) {
  const { isLoading, message, type, payload } = action;

  switch (type) {
    case SET_REGISTER:
      return {
        ...state,
        user:{
            ...state.user,
            ...payload
        }
    };
    case SET_STEP:
      return {
        ...state,
        step: payload,
      };
    case RESET_REGISTER_DATA:
      return initialState;
    // case FAILED:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     message,
    //   };
    case LOADING:
      return {
        ...state,
        isLoading,
      };
    default:
      return state;
  }
}
