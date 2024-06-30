import React, { useState } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './ProductCard.css'; 
import ModalDetail from './ModalDetail';
import formatPrice from '../hooks/formatPrice';

const CardProduct = ({ product }) => {
  const { id, title, photo, price, sales, reviews, discount } = product;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const discountedPrice = price - (price * discount / 100);

  return (
    <div className="product-card">
      <Card className='product-card'>
        <div className="product-img">
          <img src={photo} alt="" />
          <div>
            {discount >0 && (
              
              <div className='featured-tag'>    
                  -{discount} %
              </div>

            )}
          </div>
          <div className="overlay">
            <i className="ri-shopping-cart-line" onClick={toggle}></i>
            <i className="ri-eye-line" onClick={toggle}></i>
          </div>
        </div>
        <CardBody>
          <div className='card-top'>
            <h5 className="product-title" >
              <Link to="" onClick={toggle} className='title'>{title}</Link>
            </h5>
          </div>
          <div className='detail-product'>
            <div className="product-price">
              
              <p>
                {discount > 0 ? (
                  <>
                    <span className="discounted-price" style={{margin:"0px 15px 0px 0px"}}>
                      {formatPrice(discountedPrice)}đ
                    </span>
                    <span className="original-price" style={{ textDecoration: 'line-through', fontSize:'12px' }}>
                      {price}đ
                    </span>
                  </>
                ) : (
                  <span>{formatPrice(price)}đ</span>
                )}
              </p>
            </div>
              
            <div className='detail-bot'>
              <div className='star' style={{color:'gold'}}>
                {String.fromCharCode(9733).repeat(Math.round(reviews))}
              </div>
              <div className='sales'>
                Đã bán {sales}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <ModalDetail product={product} isOpen={modal} toggle={toggle}  />
    </div>
  );
}

export default CardProduct;
