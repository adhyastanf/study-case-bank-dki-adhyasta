'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { setStep, setRegisterData, AddRegisterForm, AddPinForm } from './actions'; // Action to store data in Redux
import Image from 'next/image';
import LogoLRT from '../../assets/Logo_LRT_Jakarta.svg';
import LogoBankDKI from '../../assets/Logo_Bank_DKI.svg';
import LogoMaskot from '../../assets/Logo_Maskot.svg';
import { validationSchema } from '@/utils/validationSchema';

const PhoneInput = ({ register, errors, handleNextStep }) => (
  <div className='flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-16'>
    <h1 className='font-bold text-xl text-center mb-2'>LRT X JakOne Pay</h1>
    <Image src={LogoLRT} width={250} alt='logo LRT Jakarta' className='my-4' />
    <h2 className='font-thin text-lg text-center mb-4'>Selamat Datang</h2>
    <h2 className='text-center mb-1 text-lg'>Ekspresikan perjalananmu menggunakan LRT Pay</h2>

    <label className='font-semibold mb-2 text-center w-full'>Nomor Telepon</label>
    <input type='tel' className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-full max-w-md' {...register('phone')} />
    {errors.phone && (
      <p style={{ color: 'red' }} className='text-sm mb-4'>
        {errors.phone.message}
      </p>
    )}

    <button className='bg-primary text-white px-6 py-2 rounded-md mb-4 w-full max-w-md' type='button' onClick={handleNextStep}>
      Kirim OTP
    </button>

    <p className='text-center text-sm mt-4 px-4 md:px-8 w-1/2'>
      Seluruh transaksi aman, dengan melanjutkan proses ini. Menu <span className='text-primary'>syarat & ketentuan</span> yang berlaku.
    </p>
    <div className='flex items-center justify-center'>
      <p className='text-sm'>Powered By</p>
      <Image src={LogoBankDKI} width={100} alt='logo Bank DKI Jakarta' className='my-4' />
    </div>
  </div>
);

const OtpVerification = ({ register, errors, otpError, timeRemaining, handleNextStep, resendOtp, goBack }) => {
  const { phone } = useSelector((state) => state.register.user);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-16'>
      <h1 className='font-bold text-xl text-center mb-2'>Verifikasi Kode OTP</h1>
      <p className='text-center mb-2 opacity-50'>Masukkan 6 digit kode yang sudah dikirim ke nomor kamu dibawah ini ya!</p>
      <p className='text-primary font-semibold text-center mb-4'>{phone}</p>

      <input type='text' className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-full max-w-xs' {...register('otp')} />
      {errors.otp && (
        <p style={{ color: 'red' }} className='text-sm mb-2'>
          {errors.otp.message}
        </p>
      )}
      {otpError && (
        <p style={{ color: 'red' }} className='text-sm mb-4'>
          {otpError}
        </p>
      )}

      <button type='button' className='bg-primary text-white px-6 py-2 rounded-md mb-4 w-full max-w-xs' onClick={handleNextStep} disabled={timeRemaining === 0}>
        Verifikasi OTP
      </button>

      <button type='button' className='text-primary underline text-sm mb-4' onClick={goBack}>
        Kembali untuk Ubah Nomor Telepon
      </button>

      <p className='text-center text-sm mt-4 mb-2'>
        Tidak terima kode? Kirim kode kembali dalam 00:
        {timeRemaining < 10 ? `0${timeRemaining}` : timeRemaining}
      </p>

      <button type='button' className='bg-primary text-white px-4 py-2 rounded-md w-full max-w-xs' onClick={resendOtp} disabled={timeRemaining > 0}>
        Kirim Ulang OTP
      </button>
    </div>
  );
};

const RegisterForm = ({ register, errors, handleNextStep, message }) => {
  const formData = [
    { type: 'phone', placeholder: 'Nomor telepon/handphone' },
    { type: 'name', placeholder: 'Nama' },
    { type: 'birthDate', placeholder: 'Tanggal Lahir' },
    { type: 'birthPlace', placeholder: 'Tempat Lahir' },
    { type: 'email', placeholder: 'Email' },
  ];

  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-16'>
      <Image src={LogoLRT} width={250} alt='logo LRT Jakarta' className='my-4' />
      {formData.map((field) => (
        <div key={field.type} className='mb-4 w-full max-w-xs'>
          <input type={field.type === 'birthDate' ? 'date' : 'text'} {...register(field.type)} className='border border-gray-300 rounded-md px-4 py-2 w-full' placeholder={field.placeholder} />
          {errors[field.type] && <p className='text-red-500 text-sm mt-1'>{errors[field.type].message}</p>}
        </div>
      ))}
      <button type='button' onClick={handleNextStep} className='bg-primary text-white px-6 py-2 rounded-md mt-4 w-full max-w-xs'>
        Daftar
      </button>
      {message && <p className='text-red-500 text-sm mt-1 text-center'>{message}</p>}
      <div className='flex items-center justify-center'>
        <p className='text-sm'>Powered By</p>
        <Image src={LogoBankDKI} width={100} alt='logo Bank DKI Jakarta' className='my-4' />
      </div>
    </div>
  );
};

const PinForm = ({ register, errors, handleNextStep }) => (
  <div className='flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-16'>
    <Image src={LogoLRT} width={250} alt='logo LRT Jakarta' className='my-4' />
    <h2 className='font-semibold text-lg mb-2 text-center'>Buat PIN kamu!</h2>

    <input type='text' className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-full max-w-xs text-center' {...register('pin')} />

    {errors.pin && <p className='text-red-500 text-sm mb-4 text-center'>{errors.pin.message}</p>}

    <button type='button' onClick={handleNextStep} className='bg-primary text-white px-6 py-2 rounded-md w-full max-w-xs'>
      Create
    </button>
    <Image src={LogoMaskot} width={300} alt='logo Maskot Bank DKI Jakarta' className='my-4' />
    <div className='flex items-center justify-center'>
      <p className='text-sm'>Powered By</p>
      <Image src={LogoBankDKI} width={100} alt='logo Bank DKI Jakarta' className='my-4' />
    </div>
  </div>
);

const ConfirmPinForm = ({ register, errors, pinError, handleSubmit }) => (
  <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center min-h-screen px-4 md:px-8 lg:px-16'>
    <div className='text-center'>
      <Image src={LogoLRT} width={250} alt='logo LRT Jakarta' className='my-4 mx-auto' />

      <label className='font-semibold text-lg mb-2'>Konfirmasi PIN Kamu!</label>

      <input type='text' className='border border-gray-300 rounded-md px-4 py-2 mb-4 w-full max-w-xs text-center' {...register('confirmPin')} />

      {errors.confirmPin && <p className='text-red-500 text-sm mb-2'>{errors.confirmPin.message}</p>}

      {pinError && <p className='text-red-500 text-sm mb-2'>{pinError}</p>}
    </div>

    <button type='submit' className='bg-primary text-white px-6 py-2 rounded-md w-full max-w-xs mt-4'>
      Konfirmasi
    </button>
    <div className='flex items-center justify-center'>
      <p className='text-sm'>Powered By</p>
      <Image src={LogoBankDKI} width={100} alt='logo Bank DKI Jakarta' className='my-4' />
    </div>
  </form>
);

const Register = () => {
  const dispatch = useDispatch();
  const { step, message } = useSelector((state) => state.register);
  const { userId } = useSelector((state) => state.register.user);
  const [otpError, setOtpError] = useState('');
  const [pinError, setPinError] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(30);
  const DUMMY_OTP = '123456';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    trigger,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    let timer;
    if (step === 2 && timeRemaining > 0) {
      timer = setTimeout(() => setTimeRemaining((prev) => prev - 1), 1000);
    } else if (timeRemaining === 0) {
      setOtpError('Waktu verifikasi OTP telah habis. Silakan kirim ulang OTP.');
    }
    return () => clearTimeout(timer);
  }, [timeRemaining, step]);

  const sendOtp = () => {
    alert(`OTP ${DUMMY_OTP} telah dikirim ke nomor yang diinput.`);
    dispatch(setRegisterData({ phone: getValues('phone') }));
    dispatch(setStep(2));
    setTimeRemaining(30);
    setOtpError('');
  };

  const resendOtp = () => {
    alert(`OTP ${DUMMY_OTP} telah dikirim kembali ke nomor yang diinput.`);
    setTimeRemaining(30);
    setOtpError('');
  };

  const verifyOtp = () => {
    if (getValues('otp') === DUMMY_OTP) {
      dispatch(setRegisterData({ otp: getValues('otp') }));
      dispatch(setStep(3));
    } else {
      setOtpError('OTP tidak valid');
    }
  };

  const handleRegister = async (data) => {
    dispatch(AddRegisterForm(data)); 
  };

  const handleRegisterPin = (data) => {
    dispatch(setStep(5));
  };

  const handleConfirmPin = async (data) => {
    const { pin, confirmPin } = data;

    if (pin === confirmPin) {
      dispatch(AddPinForm({ pin, userId }));
      setPinError('');
    } else {
      setPinError('PIN tidak cocok, silakan coba lagi.');
    }
  };

  const goBackToPhoneInput = () => {
    dispatch(setStep(1));
    reset();
    setOtpError('');
  };

  const handleNextStep = async () => {
    const fieldToValidate = step === 1 ? 'phone' : step === 2 ? 'otp' : step === 3 ? ['name', 'birthDate', 'birthPlace', 'email', 'phone'] : step === 4 ? 'pin' : null;

    const isValid = await trigger(fieldToValidate);

    if (isValid) {
      if (step === 1) {
        sendOtp();
      } else if (step === 2) {
        verifyOtp();
      } else if (step === 3) {
        const data = { name: getValues('name'), birthDate: getValues('birthDate'), birthPlace: getValues('birthPlace'), email: getValues('email'), phone: getValues('phone') };
        await handleRegister(data);
      } else if (step === 4) {
        handleRegisterPin(getValues());
        dispatch(setStep(5));
      } else if (step === 5) {
        handleConfirmPin(getValues());
      }
    }
  };

  return (
    <div>
      {step === 1 && <PhoneInput register={register} errors={errors} handleNextStep={handleNextStep} />}
      {step === 2 && <OtpVerification register={register} errors={errors} otpError={otpError} timeRemaining={timeRemaining} handleNextStep={handleNextStep} resendOtp={resendOtp} goBack={goBackToPhoneInput} />}
      {step === 3 && <RegisterForm register={register} errors={errors} handleNextStep={handleNextStep} message={message} />}
      {step === 4 && <PinForm register={register} errors={errors} handleNextStep={handleNextStep} />}
      {step === 5 && <ConfirmPinForm register={register} errors={errors} pinError={pinError} handleSubmit={handleSubmit(handleConfirmPin)} />}
    </div>
  );
};

export default Register;
