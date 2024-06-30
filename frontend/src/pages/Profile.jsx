import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button, FormGroup, Label, Input } from 'reactstrap';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/profile.css';
import UserModal from '../shared/UserModal';
import { notification } from 'antd';

import { PlusOutlined } from "@ant-design/icons";
import TableUser from "../shared/TableUser";

import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";


const Profile = () => {
    const {user} = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const { data: refetch } = useFetch(`${BASE_URL}/users`); 
    const showModal = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
    refetch(); 
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCurrentUser(null); 
  };
  
 
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <div className='col-title'>
                <div className='top-title d-flex align-items-center justify-content-between'>
                  <div className='img-user'>
                    {user.photo ? (
                      <img src={user.photo} alt="Avatar" />
                    ) : (
                      <i className="ri-account-circle-fill"></i>
                    )}
                  </div>
                  <div className='user-name d-flex'>
                    <span>{user.username}</span>
                  </div>
                </div>
                <div className="between-title">
                  <div className="info-accout">
                    <i className="ri-user-settings-fill"></i>
                    <span>Tài khoản của tôi</span>
                  </div>
                  <div className='charge-pass'>
                    <i className="ri-lock-fill"></i>
                    <span>Đổi mật khẩu</span>
                  </div>
                  <div className='order'>
                    <i className="ri-layout-2-fill"></i>
                    <span>Đơn hàng</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg='9'>            
            <div style={{ marginLeft: "40px" }}>
                <div style={{ marginTop: "20px" }}>
                    <TableUser
                    onEdit={showModal}
                    
                    refetch={refetch}
                    />
                </div>
                <UserModal
                    title={currentUser ? "Chỉnh sửa người dùng" : ""}
                    visible={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    user={currentUser}
                />

                </div>
                </Col>
          </Row>
        </Container>
      </section>
      
    </>
  );
};

export default Profile;