import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CustomDown from '../components/customDown/customDown';
import OriginDown from '../components/customDown/orignDown';
import CardProduct from '../shared/CardProduct';
import { Spin } from 'antd';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const categories = [
  'Hoa quả nhập khẩu',
  'Trái cây đang mùa',
  'Trái cây Việt Nam',
  'Xoài',
  'Nho',
  'Dưa hấu',
];
const origin =[
  'Việt Nam',
  'Mỹ',
  'Nhật Bản',
  'Hà Quốc',
  'Trung Quốc',
  'New Zealand',
  'Úc'
]

const Fruit = () => {

  const {
    data:fruitProducts,
    loading,
    error
  } = useFetch(`${BASE_URL}/products/filter?type=fruit`)

  return (
    <section>
      <Container>
        <Row>
          <Col lg="3">
            <CustomDown categories={categories} />
            <OriginDown categories={origin} />
          </Col>
              {loading && (
            <h4>
              <Spin tip="Loading" size="large"></Spin>
            </h4>
          )}
          {error && <h4>{error}</h4>}
          {fruitProducts.map((product) => (
            <Col lg="3" md="4" sm="6" xs="12" key={product.id} className='mt-3'>
              <CardProduct product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Fruit;
