'use client';
import { useState } from 'react';
import CardMoney from '@/components/CardMoney';
import InputAmount from '@/components/InputAmount';

function ClientDebitCard() {
    const [selectedAmount, setSelectedAmount] = useState('');
    const amountList = [50000, 100000, 150000, 200000, 250000, 300000];
  
    return (
      <>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
          {amountList.map((item, idx) => (
            <CardMoney key={idx} amount={item} setSelectedAmount={setSelectedAmount} />
          ))}
        </div>
        <InputAmount selectedAmount={selectedAmount} setSelectedAmount={setSelectedAmount} />
      </>
    );
  }

export default ClientDebitCard