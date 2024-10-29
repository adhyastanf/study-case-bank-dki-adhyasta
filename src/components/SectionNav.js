'use client';

import Image from 'next/image';
import Link from 'next/link';
import ArrowIcon from '../assets/arrow-right.svg'

function SectionNav({ icon, title, desc, link }) {
  return (
    <Link href={link} className='flex items-center justify-between mb-4'>
      <div className='flex items-center gap-3'>
        <Image src={icon} alt={title} />
        <div className='max-w-[180px] text-xs'>
          <p className='font-semibold'>{title}</p>
          <p>{desc}</p>
        </div>
      </div>
      <Image src={ArrowIcon} alt='arrow-right' />
    </Link>
  );
}

export default SectionNav;
