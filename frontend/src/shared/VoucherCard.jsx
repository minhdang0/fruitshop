import React from 'react';
import './VoucherCard.css';
import formatPrice from "../hooks/formatPrice"

const VoucherCard = ({ voucher }) => {
  const {  title, description, expiryDate, discount, photo,condition } = voucher;

  return (
    <div className="voucher-card" data-aos="fade-up" data-aos-duration="1000">
      <div className="voucher-img">
         <img src={photo} alt={title}/>
      </div>
      <div className="voucher-details">
        <h3 className="voucher-title">{title}</h3>
        <h4>{formatPrice(condition)} đ</h4>
        <p className="voucher-descriptiorn">{description}</p>
        <div className="voucher-info">
          <span className="voucher-discount">Mã: <b>{discount}</b></span>
          <span className="voucher-expiry">HSD: {expiryDate}</span>
        </div>
      </div>
    </div>
  );
};

export default VoucherCard;
