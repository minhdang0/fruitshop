import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import CustomDown from '../components/customDown/customDown';
import OriginDown from '../components/customDown/orignDown';
import CardProduct from '../shared/CardProduct';
import { BASE_URL } from '../utils/config';
import useFetch from '../hooks/useFetch';
import { Spin } from 'antd';

const categories = [
  'Thức uống có ga',
  'Thức uống cho bé',
  'Vị Dâu',
  'Vị Nho',
  'Vị Xoài'
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
const Drink = () => {
  const {
    data:drinkProducts,
    loading,
    error
  } = useFetch(`${BASE_URL}/products/filter?type=drink`)

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
              <Spin tip="Loading" size="large">Đang tìm kiếm</Spin>
            </h4>
          )}
          {error && <h4>{error}</h4>}
          {drinkProducts.map((product) => (
            <Col lg="3" md="4" sm="6" xs="12" key={product.id} className='mt-3'>
              <CardProduct product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Drink
