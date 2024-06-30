import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import CustomDown from '../components/customDown/customDown';
import CardProduct from '../shared/CardProduct';
import { BASE_URL } from '../utils/config';
import useFetch from '../hooks/useFetch';
import { Spin } from 'antd';

const categories = [
  'Quà tặng trung thu',
  'Quà tặng ông bà',
  'Quà tặng bố mẹ',
  'Quà tặng đồng nghiệp',
  'Quốc tế phụ nữ'
];
const Vegetable = () => {
  const {
    data:giftFruit,
    loading,
    error
  } = useFetch(`${BASE_URL}/products/filter?type=giftFruit`)

  return (
    <section>
    <Container>
      <Row>
        <Col lg="3">
          <CustomDown categories={categories} />
        </Col>
        {loading && (
          <h4>
            <Spin tip="Loading" size="large">Đang tìm kiếm</Spin>
          </h4>
        )}
        {error && <h4>{error}</h4>}
        {giftFruit.map((product) => (
          <Col lg="3" md="4" sm="6" xs="12" key={product.id} className='mt-3'> 
            <CardProduct product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

}

export default Vegetable
