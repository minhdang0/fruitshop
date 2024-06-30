import { Modal, Form, Input, Select, message } from "antd";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/config";
import { notification } from "antd";
const UserModal = ({ title, visible, onOk, onCancel, user }) => {
  const [form] = Form.useForm();

  const openNotificationWithIcon = (type, message, description) => {
    setTimeout(() => {
      notification[type]({
        message,
        description,
      });
    }, 1000);
  };
  useEffect(() => {
    if (visible) {
      form.resetFields();
      if (user) {
        form.setFieldsValue(user);
      }
    }
  }, [visible, user, form]);

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);

      const url =  `${BASE_URL}/users/${user._id}`;
    
      const method =  "PUT" ;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(values),
      });

      if (response.ok) {
        openNotificationWithIcon("success", "Success", "Cập nhật thành công")
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        onOk(); 
      }
    } catch (error) {
      openNotificationWithIcon("error", "Error","Cập nhật thất bại!")
    }
  };

  return (
    <Modal title={title} visible={visible} onOk={handleOk} onCancel={onCancel}>
      <Form
        form={form}
        initialValues={user} // Populate form fields with user data
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          label="Name"
          name="username"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input a valid email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          
        >
          <Input />
          <Form.Item
          label="Gender"
          name="gender"
          
        >
          <Select>
            <Select.Option value="nam">Nam</Select.Option>
            <Select.Option value="nu">Nữ</Select.Option>
          </Select>
        </Form.Item>
        </Form.Item>
       
      </Form>
    </Modal>
  );
};

export default UserModal;