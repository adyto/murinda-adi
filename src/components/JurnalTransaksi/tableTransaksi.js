import React, { useState } from 'react';
import {
  Button,
  Table,
  Popconfirm,
  InputNumber,
  Input,
  Form,
  notification,
} from 'antd';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const TableTransaksi = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      account: 'Asset 1',
      department: 'Department 1',
      description: 'Description 1',
      status: '1',
    },
    {
      key: '1',
      account: 'Asset 2',
      department: 'Department 2',
      description: 'Description 2',
      status: '2',
    },
    {
      key: '3',
      account: 'Asset 3',
      department: 'Department 3',
      description: 'Description 3',
      status: '2',
    },
    {
      key: '4',
      account: 'Asset 4',
      department: 'Department 4',
      description: 'Description 4',
      status: '3',
    },
  ]);
  const [count, setCount] = useState(2);

  const handleAdd = () => {
    const newData = {
      key: count,
      account: `Asset ${count}`,
      department: `Department ${count}`,
      description: `Description ${count}`,
      status: '1',
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  const handleDelete = (record) => {
    console.log(record);
    if (record.status === '2') {
      notification.info({
        message: 'Tidak Bisa di hapus sudah berelasi',
      });
    } else {
      const removeArray = dataSource.filter((item) => item.key !== record.key);
      setDataSource(removeArray);
      console.log(removeArray);
      // setDataSource(...dataSource.filter((item) => item.key !== key));
    }
  };

  const handleEdit = (key) => {
    console.log(key);
  };

  const columns = [
    {
      title: 'Account',
      dataIndex: 'account',
      width: '30%',
      editable: true,
    },
    {
      title: 'Department',
      dataIndex: 'department',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (record) => {
        return {
          props: {
            style: {
              background:
                record === '1' ? 'yellow' : record === '2' ? 'green' : 'white',
            },
          },
          children: <div>{record}</div>,
        };
      },
    },
    {
      title: 'Aksi',
      dataIndex: 'aksi',
      render: (text, record) => {
        return (
          <div className="flex flex-row gap-2">
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record)}
            >
              <a>Delete</a>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default TableTransaksi;
