import React, { useState, useEffect, useContext } from 'react';
import './modalDetail.css';
import formatPrice from '../hooks/formatPrice';
import { Modal, ModalBody, Button, Input } from 'reactstrap';
import { ShoppingCartContext } from '../contexts/ShoppingCart';
import { notification } from 'antd';

const ModalDetail = ({ product, isOpen, toggle }) => {
  const { dispatch } = useContext(ShoppingCartContext);

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price - (product.price * product.discount / 100));
  const [totalCost, setTotalCost] = useState(product.price);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    const newPrice = (product.price - (product.price * product.discount / 100)) * quantity;
    const oldPrice = product.price * quantity;
    setTotalPrice(newPrice);
    setTotalCost(oldPrice);
  }, [quantity, product.price, product.discount]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0 && value <= product.quantity) {
      setQuantity(value);
    }
  };

  const openNotificationWithIcon = (type, message, description) => {
    setTimeout(() => {
      notification[type]({
        message,
        description,
      });
    });
  };

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
    setAddedToCart(true);
    openNotificationWithIcon("success", "Success", "Thêm sản phẩm thành công");
    setTimeout(() => {
      setAddedToCart(false);
    });
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalBody className="modal-body">
        <div className='img-product'>
          <img src={product.photo} alt="product" className="img-fluid" />
        </div>
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className='start'>{String.fromCharCode(9733).repeat(Math.round(product.reviews))}</p>
          <p>
            {product.discount > 0 ? (
              <>
                <span className="discount-Price" style={{ margin: "0px 15px 0px 0px" }}>
                  {formatPrice(totalPrice)}đ
                </span>
                <span className="original-price" style={{ textDecoration: 'line-through', fontSize: '12px' }}>
                  {formatPrice(totalCost)}đ
                </span>
                <span className='pro-percent'>
                  {product.discount}% giảm
                </span>
              </>
            ) : (
              <span>{formatPrice(product.price)}đ</span>
            )}
          </p>
          <p className='avaliable'>Số lượng có sẵn: {product.quantity}</p>

          <div className="quantity-selector">
            <div className="place-selector">
              <Button className="reduce" onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</Button>
              <Input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max={product.quantity}
                className='input-quantity'
              />
              <Button className="increase" onClick={() => setQuantity(quantity + 1)} disabled={quantity >= product.quantity}>+</Button>
            </div>
          </div>
          <Button onClick={handleAddToCart} className="button-add"> <i className="ri-shopping-cart-fill"></i> Thêm vào giỏ hàng</Button>
        </div>
        <Button color="secondary" onClick={toggle} className="button-close">Đóng</Button>
      </ModalBody>
    </Modal>
  );
};

export default ModalDetail;
