import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link,useNavigate } from "react-router-dom";
import {notification} from 'antd';
import "../styles/login.css";

import { AuthContext } from "../contexts/AuthContext";
import { BASE_URL } from "../utils/config";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email:undefined,
    password: undefined,
  });
  const {dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const openNotificationWithIcon = (type, message, description) => {
    setTimeout(() => {
      notification[type]({
        message,
        description,
      });
    }, 1000);
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async(e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res = await fetch(`${BASE_URL}/auth/login`,{
        method:"post",
        headers:{
          "content-type":"application/json"
        },
        credentials:"include",
        body: JSON.stringify(credentials)
      });

      const result = await res.json();

      if (!res.ok){
        return openNotificationWithIcon(
          "error",
          "Error",
          "Sai tên đăng nhập hoặc mật khẩu"
        )
      }
      dispatch({
        type:"LOGIN_SUCCESS",
        payload:{
          user:result.data,
          role:result.role,
        }
      });

      openNotificationWithIcon("success", "Success", "Đăng nhập thành công!");
      navigate("/");
    }catch (err) {
      openNotificationWithIcon(
        "error",
        "Error",
        "Lỗi máy chủ, đăng nhập thất bại!"
      );
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  const isFocusedOrFilled = (value) => {
    return value && value.length > 0 ? 'focus' : '';
  };

  return (
    <section>
      <div className="full">
        <Container>
          <Row>
            <Col lg="5" className="m-auto">
              <div className="login_container d-fex justify-content-between">
                <div className="login_form">
                  <div className="user"></div>
                  <h2>Đăng nhập</h2>
                  <Form onSubmit={handleClick}>
                    <FormGroup className={`input-container ${isFocusedOrFilled(credentials.email)}`}>
                      <input
                        type="email"
                        required
                        id="email"
                        onChange={handleChange}
                        value={credentials.email}
                        className="input-fleid"
                      />
                      <div className="icon-user">
                        <i class="ri-mail-fill"></i>
                        <span>email</span>
                      </div>
                    </FormGroup>
                    <FormGroup className={`input-container ${isFocusedOrFilled(credentials.password)}`}
                    >
                      <input
                        type="password"
                        required
                        id="password"
                        onChange={handleChange}
                        value={credentials.password}
                        className="input-fleid"
                        
                      />
                      <div className="icon-password">
                        <i className="ri-key-2-fill"></i>
                        <span>password</span>
                      </div>
                    </FormGroup>
                    <div className="btn_auth">
                      <Button className="btn secondary__btn auth_btn" type="submit">
                        Đăng nhập
                      </Button>
                    </div>
                  </Form>
                  <p>
                    Chưa có tài khoản? <Link to="/reagister">Tạo mới</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Login;
