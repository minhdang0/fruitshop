import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import CustomDown from '../components/customDown/customDown';
import CardProduct from '../shared/CardProduct';
import { BASE_URL } from '../utils/config';
import useFetch from '../hooks/useFetch';
import { Spin } from 'antd';

const categories = [
  'Rau theo mùa',
  'Miền Bắc',
  'miền Nam',
  'Rau cải',
  'Rau muống'
];

const Vegetable = () => {
  const {
    data:vegetableProducts,
    loading,
    error
  } = useFetch(`${BASE_URL}/products/filter?type=vegetable`)

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
        {vegetableProducts.map((product) => (
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
