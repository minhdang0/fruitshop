import React,{useEffect} from 'react';
import VoucherCard from '../../shared/VoucherCard';
import voucher from '../../assets/data/voucher.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col } from 'reactstrap';


const Voucher = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
      {voucher.map((vouchers) => (
        <Col lg="4" className='mb-3' key={vouchers.id}>
          <VoucherCard voucher={vouchers} />
        </Col>
      ))}
    </>
  );
};

export default Voucher;
