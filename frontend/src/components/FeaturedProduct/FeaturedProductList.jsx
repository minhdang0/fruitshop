import React from 'react'

import CardProduct from '../../shared/CardProduct';

import { Col } from "reactstrap";
import { Spin } from "antd";

import useFetch from "../../hooks/useFetch.js";
import { BASE_URL } from "../../utils/config";

const FeaturedProductList = () => {
  const {
    data: featuredProduct,
    loading,
    error,
  } = useFetch(`${BASE_URL}/products/search/getFeaturedProduct`);

  return (
    <>
        {loading && (
        <h4>
          <Spin tip="Loading" size="large"></Spin>
        </h4>
      )}
       {error && <h4>{error}</h4>}
        {!loading &&
        !error &&
        featuredProduct?.map((product) =>(
            <Col lg="3" className="mb-4" key={product.id}>
                <CardProduct product={product} />
            </Col>
        ))}
    </>
  )
}

export default FeaturedProductList
