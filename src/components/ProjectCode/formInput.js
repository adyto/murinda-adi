import React from 'react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  Space,
  notification,
} from 'antd';

const FormInput = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    notification.success({
      message: 'success',
      description: `${values.kodeProject},${values.namaProject}`,
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className=" w-full mx-auto max-w-[600px]">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          // style={{
          //   maxWidth: 600,
          // }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="flex flex-col gap-2 p-4 border rounded-lg max-w-96 sm:max-w-[500px] md:max-w-[600px]"
        >
          <Form.Item
            label="Kode Project"
            name="kodeProject"
            layout="vertical"
            rules={[
              {
                required: true,
                message: 'Please input kode jurnal!',
              },
            ]}
            className="h-14"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Nama Project"
            name="namaProject"
            layout="vertical"
            className="h-14"
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default FormInput;
