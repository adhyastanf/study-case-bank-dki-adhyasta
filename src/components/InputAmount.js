'use client'
import { thousandSeparator } from '@/utils/format';
import Image from 'next/image';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InfoIcon from '../assets/info.svg';

function InputAmount({ selectedAmount, setSelectedAmount }) {
    const { register, handleSubmit, setValue, watch, reset } = useForm();
    const minAmount = 20000;
  
    useEffect(() => {
      setValue('amount', thousandSeparator(selectedAmount));
    }, [selectedAmount, setValue]);
  
    const amountValue = watch('amount');
  
    const onSubmit = (data) => {
      console.log('Submitted Data:', data);
      reset();
      setSelectedAmount(''); // Optionally reset selectedAmount as well
    };
  
    const handleAmountChange = (e) => {
      const numericValue = e.target.value.replace(/\D/g, '');
      setSelectedAmount(numericValue);
    };
  
    return (
      <div className='mt-4'>
        <p className='font-semibold text-sm'>Enter Another Amount</p>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4'>
          <div className='flex items-center'>
            <h1 className='font-bold text-3xl'>Rp</h1>
            <input
              type='text'
              placeholder='0'
              {...register('amount', { required: true })}
              value={thousandSeparator(amountValue?.replace(/\D/g, '')) || ''}
              onChange={handleAmountChange}
              className='appearance-none outline-none border-none font-bold text-3xl p-0 ml-2 w-full'
            />
          </div>
          <div className='flex items-center gap-2 text-gray-400'>
            <Image src={InfoIcon} alt='info-icon' />
            <p>Minimum top up amount Rp 20.000</p>
          </div>
  
          <button
            type='submit'
            disabled={!amountValue || parseInt(amountValue.replace(/\./g, '')) < minAmount}
            className={`px-4 py-2 rounded-md text-white font-semibold ${!amountValue || parseInt(amountValue.replace(/\./g, '')) < minAmount ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary'}`}
          >
            Top Up
          </button>
        </form>
      </div>
    );
  }

export default InputAmount