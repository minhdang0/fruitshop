import React, { useState, useEffect } from 'react';
import './FlashSale.css';
import { Col } from "reactstrap";
import CardProduct from '../../shared/CardProduct';
import { Spin } from "antd";

import useFetch from "../../hooks/useFetch.js";
import { BASE_URL } from "../../utils/config";

const FlashSale = () => {
 
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-06-08T00:00:00'); 
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });


  
  const {
    data:discountedProducts, loading,error
  } = useFetch(`${BASE_URL}/products/discounted`)
  return (
    <>
      <div className='wrapper-content'>
        <div className="section-heading style-2">
          <div className='box-header'>
            <h2 className='title'>
              <div className="icon">
                <i className="ri-flashlight-fill"></i>
              </div>
              FLASH SALE
            </h2>
          </div>
          <div className='box-countdown'>
            <div className="time-box">
              <span className="time">{timeLeft.days || 0}</span>
              <span className="label">Ngày</span>
            </div>
            <div className="time-box">
              <span className="time">{timeLeft.hours || 0}</span>
              <span className="label">Giờ</span>
            </div>
            <div className="time-box">
              <span className="time">{timeLeft.minutes || 0}</span>
              <span className="label">Phút</span>
            </div>
            <div className="time-box">
              <span className="time">{timeLeft.seconds || 0}</span>
              <span className="label">Giây</span>
            </div>
          </div>
        </div>
      </div>
      { loading && (
          <h4><Spin tip="loading" size='large'></Spin></h4>
        )}
        {error &&(<h4>{error}</h4>)}
      <div className='card-discount'>
        {!loading &&
        !error &&
          discountedProducts?.map((product) =>(
          <Col lg="3" className="mb-4" key={product.id}>
              <CardProduct product={product} />
          </Col>
      ))}
      </div>
    </>
  );
};

export default FlashSale;
