import CardInformation from '@/components/CardInformation';
import HeaderBack from '@/components/HeaderBack';
import TypeMethods from '@/components/TypeMethods';
import ClientDebitCard from './client';

function DebitCardPage() {
  return (
    <div className='p-4'>
      <HeaderBack title='Top Up LRTJpay' back={true} />
      <TypeMethods title='Via Debit/Credit Card' />
      <CardInformation />
      <ClientDebitCard />
    </div>
  );
}

export default DebitCardPage;
