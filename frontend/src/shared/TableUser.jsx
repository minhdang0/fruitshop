import { Table, Button, Popconfirm } from "antd";
import React from "react";
import { BASE_URL } from "../utils/config";
import useFetch from "../hooks/useFetch";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const UserTableComponent = ({ onEdit, onDelete }) => {
  const { data: users } = useFetch(`${BASE_URL}/users`);

  const handleEdit = (record) => {
    onEdit(record); // Pass selected user data to the modal
  };


  const columns = [
    {
      title: "Tên",
      dataIndex: "username",
      key: "username",
      render: (text, record) => <p> {text}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text, record) => <p> {text}</p>,
    },
    {
      title: "Số điên thoại",
      dataIndex: "phone",
      fixed: "right",
      key: "phone",
      render: (text, record) => <p> {text}</p>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (text, record) => <p> {text}</p>,
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "Gender",
      render: (text, record) => <p> {text}</p>,
    },
    {
      title: "",
      key: "action",
      
      render: (text, record) => (
        <>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>
            Chỉnh sửa
          </Button>
        </>
      ),
    },
  ];

  return <Table dataSource={users} columns={columns} rowKey="_id" pagination={false} />;
};

export default UserTableComponent;
