import Image from 'next/image';
import TopUpIcon from '../assets/top-up-icon.svg';

function TypeMethods({ title }) {
  return (
    <div className='flex items-center gap-3 font-bold text-lg py-4'>
      <Image src={TopUpIcon} alt={'top up icon'} />
      <h2>{title}</h2>
    </div>
  );
}

export default TypeMethods;
