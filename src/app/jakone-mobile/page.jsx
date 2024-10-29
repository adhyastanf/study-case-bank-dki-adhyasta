import CardInformation from '@/components/CardInformation';
import HeaderBack from '@/components/HeaderBack';
import TypeMethods from '@/components/TypeMethods';
import ClientJakOneMobile from './client';

function JakOneMobilePage() {
  return (
    <div className='p-4'>
      <HeaderBack title='Top Up LRTJpay' back={true} />
      <TypeMethods title='Via JakOne Mobile' />
      <CardInformation />
      <ClientJakOneMobile />
    </div>
  );
}

export default JakOneMobilePage;
