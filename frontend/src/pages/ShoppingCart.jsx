import React, { useContext } from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCart';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shoppingCart.css'
import formatPrice from '../hooks/formatPrice';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useContext(ShoppingCartContext);

  console.log('Current cart items:', cartItems); // Log dữ liệu giỏ hàng hiện tại

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="cart-page">
              <h2>Giỏ hàng của bạn</h2>
            </div>
          </Col>
          {cartItems.length > 0 ? (
            <div className="cart-items">
              {cartItems.map((item, index) => {
                const discounted =  (item.price - (item.price *item.discount / 100))*item.quantity;
                const totalPrice = item.price * item.quantity;
                return (
                  <Col lg='12' key={index}>
                    <div className="cart-item">
                      <div className="product-infomation">
                        
                        <div className='photo-product'>
                          <img src={item.photo} alt="" />
                        </div>
                        
                        <div className='item-title'>
                          <h3 className='title-item'>{item.title}</h3>
                        </div>
                        
                        <div className='item-price'>
                        {
                          item.discount >0 ?(
                            <> 
                              <span className='item-discount'>{formatPrice(discounted)}đ</span>
                              <span className='item-total'>{formatPrice(totalPrice)}đ</span>
                              <span className='item-per'>{item.discount}% giảm</span>
                            </>
                          ):(
                            <>
                             <span>{formatPrice(totalPrice)}đ</span>
                            </>
                          )
                        }
                        </div>
                       

                        <div className="item-quantity">
                          <p>Số lượng: {item.quantity}</p>
                        </div>
                        <div className='item-delete'>
                          <button onClick={() => removeFromCart(item.id)}>Xóa</button>
                        </div>
                       
                      </div>
                    </div>
                  </Col>
                );
              })}
            </div>
          ) : (
            <p>Giỏ hàng của bạn trống.</p>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ShoppingCart;
