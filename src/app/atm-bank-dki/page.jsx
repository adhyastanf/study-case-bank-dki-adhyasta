import CardInformation from '@/components/CardInformation';
import HeaderBack from '@/components/HeaderBack';
import TypeMethods from '@/components/TypeMethods';
import ClientAtmBankDKI from './client';

function BankDKIPage() {
  return (
    <div className='p-4'>
      <HeaderBack title='Top Up LRTJpay' back={true} />
      <TypeMethods title='Via ATM Bank DKI' />
      <CardInformation />
      <ClientAtmBankDKI />
    </div>
  );
}

export default BankDKIPage;
