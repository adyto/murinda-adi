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
      description: `${values.kodeCurrency},${values.namaMataUang},${values.nilaiCurrency}, ${values.status}`,
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleChangeStatus = (value) => {
    console.log(value);
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
            label="Kode Currency"
            name="kodeCurrency"
            layout="vertical"
            rules={[
              {
                required: true,
                message: 'Please input kode currency!',
              },
            ]}
            className="h-14"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Nama Mata Uang"
            name="namaMataUang"
            layout="vertical"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input nama mata uang!',
            //   },
            // ]}
            className="h-14"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Nilai Currency"
            name="nilaiCurrency"
            layout="vertical"
            // rules={[
            //   {
            //     required: true,
            //     message: 'Please input nama mata uang!',
            //   },
            // ]}
            className="h-14"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            layout="vertical"
            className="h-14"
          >
            <Select onChange={handleChangeStatus} className="w-full">
              <Select.Option value="1">Yes</Select.Option>
              <Select.Option value="2">No</Select.Option>
            </Select>
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
