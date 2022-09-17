import './Footer.css';
import Link from './Link';

const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div> All rights reserved </div>
      <Link link='https://github.com/MiloszKozaa' linkTitle='Miłosz Koza' />
    </div>
  );
};

export default Footer;
