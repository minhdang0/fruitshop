import React from "react";
import "./footer.css";

import { Link } from "react-router-dom";
import { Container, Row, Col} from "reactstrap";
import logo from "../../assets/images/logo_fruit.png";


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" className="d-flex align-item-center" />
              <div className="social_links d-flex align-item-center gap-4">
                <span>Garden goodness</span>
              </div>
            </div>
            <div className="social_links d-flex align-item-center gap-4">
                <span>
                  <Link to="#">
                    {" "}
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    {" "}
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    {" "}
                    <i className="ri-facebook-circle-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    {" "}
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
              </div>
         
          </Col>
          <Col lg='4'>
            <p className="info-title d-flex align-item-center mt-3">Thông tin công ty</p>
            <div className="info-detail d-flex align-item-center" >
                <p>CÔNG TY CỔ PHẦN THƯƠNG MẠI VÀ ĐẦU TƯ GARDEN GOODNESS.<br/>
                Số đăng ký kinh doanh: 01342525.<br/>
                Địa chỉ: Cầu Giấy Hà Nội.<br/>
                Hotline: 0123456789 <br/>
                Email CSKH: cskhgardengoodness@gmail.com</p>
              
            </div>
          </Col>
          <Col lg='3'>
            <p className="info-title d-flex align-item-center mt-3">Chính sách và dịch vụ</p>
            <div className="info-detail d-flex align-item-center" >
                <p>Đổi trả 48h<br/>
                  Chính sách khách hàng thân thiết<br/>
                  Chính sách bảo mật thông tin cá nhân<br/>
                  Chính sách cho khách hàng doanh nghiệp</p>
                                
            </div>
          </Col>
          <Col lg='2'>
            <p className="info-title d-flex align-item-center mt-3">Hệ thống cửa hàng</p>
            <div className="info-detail d-flex align-item-center" >
                <p>Hà Nội<br/>
                  TP. Hồ Chí Minh<br/>
                  </p>
                                
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;