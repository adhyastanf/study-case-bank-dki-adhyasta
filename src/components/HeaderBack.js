'use client';
import ArrowIcon from '../assets/arrow.svg';

import Image from 'next/image';
import Link from 'next/link';

function HeaderBack({ title, back = false, nav = '' }) {
  return (
    <div className='flex gap-4 items-center'>
      {back && (
        <Link href={'/'}>
          <Image src={ArrowIcon} alt='arrow-icon' />
        </Link>
      )}
      <h2 className='font-bold texst-lg'>{title}</h2>
    </div>
  );
}

export default HeaderBack;
