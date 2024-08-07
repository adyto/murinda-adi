import { Button, Checkbox, Form, Input, DatePicker, Modal, Table } from 'antd';
import React, { useState } from 'react';
import { FileSearchOutlined, SearchOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import TableTransaksi from './tableTransaksi';
// <FileSearchOutlined />

const FormTransaksi = () => {
  const [jurnalCode, setJurnalCode] = useState('');
  const [numberCode, setNumberCode] = useState(0);
  const [noRef, setNoRef] = useState('');
  const [date, setDate] = useState('');
  const [project, setProject] = useState('');
  const [remarks, setRemarks] = useState('');
  const [isModalJurnalCode, setIsModalJurnalCode] = useState(false);

  const dataMasterJurnal = [
    {
      code: '123',
      name: 'Test123',
      lastNumber: '321',
    },
    {
      code: '456',
      name: 'Test456',
      lastNumber: '654',
    },
    {
      code: '789',
      name: 'Test789',
      lastNumber: '987',
    },
  ];
  const columnsMasterJurnal = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Last Number',
      dataIndex: 'lastNumber',
      key: 'lastNumber',
    },
  ];

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleDatePickerChange = (date, dateString) => {
    console.log(date);
    console.log(dateString);
  };
  console.log(jurnalCode);
  console.log(numberCode);
  console.log(isModalJurnalCode);

  return (
    <div className="container flex flex-col mx-auto">
      <Form
        className="flex flex-row gap-4 p-4 border rounded-lg"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
      >
        <div className="flex flex-col w-72">
          <Form.Item
            label="Jurnal Code"
            name="jurnalCode"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input your jurnal code!',
            //   },
            // ]}
          >
            <Input
              disabled
              value={jurnalCode}
              onChange={(e) => setJurnalCode(e.target.value)}
              className="w-24 mr-4 lg:w-40 md:w-36"
            />
            <FileSearchOutlined onClick={() => setIsModalJurnalCode(true)} />
          </Form.Item>

          <Form.Item
            label="Number"
            name="number"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input your jurnal code!',
            //   },
            // ]}
          >
            <Input
              value={numberCode}
              defaultValue={0}
              onChange={(e) => setNumberCode(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Date" name="date">
            <DatePicker
              format={'DD/MM/YYYY'}
              onChange={(date, dateString) =>
                handleDatePickerChange(date, dateString)
              }
              disabledDate={(current) => {
                return current && current > dayjs().endOf('day');
              }}
            />
          </Form.Item>
        </div>
        <div className="flex flex-col">
          <Form.Item
            label="Project"
            name="project"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input your jurnal code!',
            //   },
            // ]}
          >
            <Input
              value={project}
              onChange={(e) => setProject(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="No Ref:" name="noRef" className="w-full text-start">
            <Input value={noRef} onChange={(e) => setNoRef(e.target.value)} />
          </Form.Item>

          <Form.Item label="Remarks" name={'remarks'}>
            <Input
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </Form.Item>
        </div>
        <div>
          <FileSearchOutlined />
        </div>
        <div>
          <Input />
        </div>
      </Form>
      <TableTransaksi />
      <Modal
        title="Jurnal Code"
        open={isModalJurnalCode}
        // onOk={handleOk}
        onCancel={() => setIsModalJurnalCode(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalJurnalCode(false)}>
            Return
          </Button>,
        ]}
      >
        <Table
          columns={columnsMasterJurnal}
          dataSource={dataMasterJurnal}
          onRow={(record) => {
            return {
              onDoubleClick: () => {
                setJurnalCode(record.code);
                setIsModalJurnalCode(false);
                console.log(record);
              },
              onClick: () => {
                setJurnalCode(record.code);
                setIsModalJurnalCode(false);
              },
            };
          }}
        />
      </Modal>
    </div>
  );
};

export default FormTransaksi;
