import React,{useEffect} from 'react';
import "../styles/home.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from "reactstrap";

import vegetable2 from'../assets/images/vegetable2.jpg';
import fruit2 from '../assets/images/fruit2.jpg';
import coconut from '../assets/images/coconut.jpg';
import fruitpacking2 from '../assets/images/fruitpacking2.jpg';
import drinkpacking from '../assets/images/drinkpacking.jpg';
import fruitdrying from '../assets/images/fruitdrying.jpg';

import Testimonials from '../components/Testimonials/Testimonials';
import Loccation from '../shared/Location';
import FeaturedProductList from '../components/FeaturedProduct/FeaturedProductList';
import FlashSale from '../components/FlashSale/FlashSale';
import Voucher from '../components/Voucher/Voucher';

const Home = () => {  
  useEffect(() => {
    AOS.init();
  }, []);
  console.error();
  return (
    <>
      <section className="hero-section" data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <Row>
            <Col lg="12">
              <Testimonials />
            </Col>
            <Col lg="6">
              <div className='hero_content' data-aos="fade-up" data-aos-duration="1000">
                <h4>
                  Chúng tôi sẽ đem đến những trải nghiệm tốt nhất
                </h4> 
                <p className='detail-service' data-aos="fade-up" data-aos-duration="1000">
                    <span><i className="ri-check-fill"></i> Giao hàng nhanh chóng</span> <br />
                    <span><i className="ri-check-fill"></i> Sản phẩm chất lượng</span> <br />
                    <span><i className="ri-check-fill"></i> Phù hợp mọi lứa tuổi</span>
                </p>
              </div>
            </Col>
            <Col lg="2" className="hero_img-box mt-2" data-aos="fade-up" data-aos-duration="1000">  
              <div>
                <img src={vegetable2} />
              </div>
            </Col>
            <Col lg="2" className="hero_img-box mt-4" data-aos="fade-up" data-aos-duration="1000">  
              <div>
                <img src={fruit2} />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5" data-aos="fade-up" data-aos-duration="1000">
                <img src={coconut} alt="" />
              </div>
            </Col>
            
          </Row>
        </Container>
      </section>
          {/*-------Feature product=--------- */}
      <section data-aos="fade-up" data-aos-duration="1000" >
        <Container>
          <Row>
            <Col lg="12" className="mb-5 mt-0 mb-0 best-sale">
              <h2>Những thực phẩm bán chạy nhất
              <span>Chất lượng sản phẩm được cập nhật hàng ngày</span>
              </h2>
            </Col>
            <FeaturedProductList />
          </Row>
        </Container>
      </section>
      {/* falsSale */}
      <section data-aos="fade-up" data-aos-duration="1000">
        <Container>
          <Row>
            <Col lg='12'>
              <FlashSale   />
            </Col>
          </Row>
        </Container>
      </section>
     
     <section>
        <Container>
            <Row>
              <Col lg='6'>
              <div className='hero_content mt-0' data-aos="fade-up" data-aos-duration="1000">
                <h4>
                  Giao hàng nhanh chóng
                </h4> 
                <Loccation />
                <p className='transpost' data-aos="fade-up" data-aos-duration="1000">
                    <i class="ri-coupon-3-fill"></i> Rất nhiều ưu đãi <br/>
                  </p>
              </div>
              </Col>
              <Col lg='2'>
                   <div className='img-delivery' data-aos="fade-up" data-aos-duration="1000">
                      <img src={fruitpacking2 } />
                   </div>
             </Col>
             <Col lg='2'>
                   <div className='img-delivery' data-aos="fade-up" data-aos-duration="1000">
                      <img src={drinkpacking } />  
                   </div>
             </Col>
             <Col lg='2'>
                   <div className='img-delivery' data-aos="fade-up" data-aos-duration="1000">
                      <img src={fruitdrying} />  
                   </div>
             </Col>
              
              <Col lg='12'>
                <div className='Ship mt-5' data-aos="fade-up" data-aos-duration="1000">
                  <p>Khuyến mãi dành cho bạn</p>
                </div>
                <Voucher />
              </Col>
              
            </Row>
        </Container>
     </section>
    </>
  );
}

export default Home;
