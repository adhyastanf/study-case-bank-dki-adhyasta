'use client'
import { thousandSeparator } from '@/utils/format';
import Image from 'next/image';
import TopUpIcon from '../assets/top-up-icon.svg';

function CardMoney({ amount, setSelectedAmount }) {
  return (
    <div
      onClick={() => setSelectedAmount(amount.toString())} // Set the input to the clicked amount
      className='flex items-center gap-3 p-3 border border-[#E0E0E0] rounded-md hover:border-primary hover:shadow-md
        active:scale-95 transition duration-200 ease-in-out cursor-pointer'
    >
      <Image src={TopUpIcon} alt='Top Up Icon' />
      <p className='text-lg font-medium'>Rp{thousandSeparator(amount)}</p>
    </div>
  );
}

export default CardMoney;
