import Announcement from '../assets/Announcement.svg';
import Image from 'next/image';

function CardInformation() {
  return (
    <div className='my-4 p-4 flex gap-2 bg-[#F2F6FA] items-start rounded-xl'>
      <Image src={Announcement} alt='announcement-icon' />
      <div>
        <p className='font-semibold text-primary text-sm'>Top Up Information</p>
        <p className='text-xs'>You can save up to Rp 2.000.000 with maximum transactions of Rp 20.000.000 per month</p>
      </div>
    </div>
  );
}

export default CardInformation;
