import React, { useState,useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link , useNavigate} from "react-router-dom";
import "../styles/login.css";

import { AuthContext } from "../contexts/AuthContext";
import { BASE_URL } from "../utils/config";
import { notification } from "antd";  

const Reagister = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
  });
  const [loading, setLoading] = useState(false);

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

   const openNotificationWithIcon = (type, message, description) => {
     setTimeout(() => {
      notification[type]({
        message,
        description,
      });
    }, 500);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!credentials.username || !credentials.email || !credentials.password) {
      return openNotificationWithIcon(
        "warning",
        "Warning",
        "Please fill in all fields"
      );
    }

    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Registration failed");
      }

      dispatch({ type: "REGISTER_SUCCESS", payload: result });
      openNotificationWithIcon(
        "success",
        "Success",
        "Account created successfully"
      );
      navigate("/login");
    } catch (error) {
      openNotificationWithIcon("error", "Error", `Error: ${error.message}`);
    } finally {
      setLoading(false);
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
                  <h2>Đăng ký</h2>
                  <Form onSubmit={handleClick}>
                    <FormGroup className={`input-container ${isFocusedOrFilled(credentials.username)}`}>
                      <input
                        type="text"
                        required
                        id="username"
                        onChange={handleChange}
                        value={credentials.username}
                        className="input-fleid"
                      />
                      <div className="icon-user" style={{position:'absolute', top:'27%'}} >
                        <i className="ri-user-fill mr-4"></i>
                        <span>username</span>
                      </div>
                    </FormGroup>
                    <FormGroup className={`input-container ${isFocusedOrFilled(credentials.email)}`}>
                      <input
                        type="email"
                        required
                        id="email"
                        onChange={handleChange}
                        value={credentials.email}
                        className="input-fleid"
                      />
                      <div className="icon-email" style={{position:'absolute', top:'43%'}}>
                        <i class="ri-mail-fill"></i>
                        <span>email</span>
                      </div>
                    </FormGroup>
                    <FormGroup className={`input-container ${isFocusedOrFilled(credentials.password)}`}>
                      <input
                        type="password"
                        required
                        id="password"
                        onChange={handleChange}
                        value={credentials.password}
                        className="input-fleid"
                      />
                      <div className="icon-password" style={{position:'absolute', top:'59%'}}>
                        <i className="ri-key-2-fill"></i>
                        <span>password</span>
                      </div>
                    </FormGroup>
                    <div className="btn_auth">
                      <Button className="btn secondary__btn auth_btn" type="submit"  disabled={loading} >
                      <span style={{padding:'0 8px'}}>  {loading ? "Registering..." : "Đăng ký"} </span>
                      </Button>
                    </div>
                  </Form>
                  <p>
                    Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
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

export default Reagister;
