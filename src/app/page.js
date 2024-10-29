import Image from 'next/image';
import JakOneIcon from '../assets/jak-one-mobile-icon.svg';
import AtmIcon from '../assets/atm-bank-dki-icon.svg';
import OtherBankIcon from '../assets/other-bank-icon.svg';
import DebitIcon from '../assets/debit-card-icon.svg';
import SectionNav from '@/components/SectionNav';
import HeaderBack from '@/components/HeaderBack';
import TypeMethods from '@/components/TypeMethods';

export default function Home() {
  const navList = [
    { icon: JakOneIcon, title: 'JakOne Mobile', desc: 'No administration fees via the JakOne Mobile App', link: '/jakone-mobile' },
    { icon: AtmIcon, title: 'ATM Bank DKI', desc: 'Top up Martipay from nearest Bank DKI ATM', link: '/atm-bank-dki' },
    { icon: OtherBankIcon, title: 'Other Bank', desc: 'Transfer anytime from your favourite Indonesian bank', link: '/other-bank' },
    { icon: DebitIcon, title: 'Debit Card', desc: 'Top up online using your debit card', link: '/debit-card' },
  ];

  return (
    <div>
      <HeaderBack title='Top Up LRTJPay' />
      <TypeMethods title='Top Up Methods' />
      {navList.map((item, idx) => (
        <div key={idx}>
          <SectionNav icon={item.icon} title={item.title} desc={item.desc} link={item.link} />
        </div>
      ))}
    </div>
  );
}
