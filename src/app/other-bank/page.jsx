import CardInformation from '@/components/CardInformation';
import HeaderBack from '@/components/HeaderBack';
import TypeMethods from '@/components/TypeMethods';
import ClientOtherBank from './client';

function OtherBankPage() {
  return (
    <div className='p-4'>
      <HeaderBack title='Top Up LRTJpay' back={true} />
      <TypeMethods title='Via JakOne Mobile' />
      <CardInformation />
      <ClientOtherBank />
    </div>
  );
}

export default OtherBankPage;
