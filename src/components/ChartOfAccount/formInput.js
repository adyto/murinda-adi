import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Select, Space } from 'antd';
const { Option } = Select;

const FormInput = () => {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [accType, setAccType] = useState('');

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleChangeType = (value) => {
    setAccType(value);
  };

  const handleChangeLevel = (value) => {
    setSelectedLevel(value);
  };

  const handleChangeAccParents = (value) => {
    console.log(value);
  };

  const handleChangeAccGroup = (value) => {
    console.log(value);
  };

  const handleChangeAccControl = (value) => {
    console.log(value);
  };

  const handleChangeCurrency = (value) => {
    console.log(value);
  };

  console.log(selectedLevel);
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        //   variant="borderless"
        autoComplete="off"
        className="flex flex-col gap-2 p-4 border rounded-lg"
      >
        <Form.Item
          label="Acc. Code :"
          name="accCode"
          layout="vertical"
          rules={[
            {
              required: true,
              message: 'Please input your acc code!',
              // max: 50,
            },
          ]}
          className="h-14"
          // className="mb-44"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Acc. Name :"
          name="accName"
          layout="vertical"
          rules={[
            {
              required: true,
              message: 'Please input your acc name!',
            },
          ]}
          className="h-14"
        >
          <Input />
        </Form.Item>
        <div className="flex flex-row justify-between">
          <Form.Item
            label="Acc. Type :"
            name="accType"
            layout="vertical"
            className="w-full h-14"
          >
            <Select
              defaultValue="general"
              className="w-full"
              onChange={handleChangeType}
              options={[
                {
                  value: 'general',
                  label: 'General',
                },
                {
                  value: 'detil',
                  label: 'Detil',
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Level"
            name="level"
            layout="vertical"
            className="w-full h-14"
            rules={[
              {
                required: selectedLevel === 0 ? true : false,
                message: 'Please input your level!',
              },
            ]}
          >
            <Select
              // defaultValue="lucy"
              // style={{
              //   width: 120,
              // }}
              // defaultValue={1}
              className="w-full"
              onChange={handleChangeLevel}
              options={[
                {
                  value: 1,
                  label: '1',
                },
                {
                  value: 2,
                  label: '2',
                },
                {
                  value: 3,
                  label: '3',
                },
                {
                  value: 4,
                  label: '4',
                  // disabled: true,
                },
                {
                  value: 5,
                  label: '5',
                },
                {
                  value: 6,
                  label: '6',
                },
                {
                  value: 7,
                  label: '7',
                },
                {
                  value: 8,
                  label: '8',
                },
                {
                  value: 9,
                  label: '9',
                },
              ]}
            />
          </Form.Item>
        </div>

        <Form.Item
          label="Acc. Parents :"
          name="accParents"
          layout="vertical"
          rules={[
            {
              required: selectedLevel === 1 ? false : true,
              message: 'Please input your acc parents!',
            },
          ]}
          className="h-14"
        >
          <Select
            //   defaultValue="lucy"
            className="w-full"
            onChange={handleChangeAccParents}
            options={[
              {
                value: 'general',
                label: 'General',
              },
              {
                value: 'Detil',
                label: 'detil',
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Acc. Group :"
          name="accGroup"
          layout="vertical"
          rules={[
            {
              required: false,
              message: 'Please input your acc group!',
            },
          ]}
          className="h-14"
        >
          <Select
            //   defaultValue="lucy"
            className="w-full"
            onChange={handleChangeAccGroup}
            options={[
              {
                value: 'asset',
                label: 'Asset',
              },
              {
                value: 'liabilities',
                label: 'Liabilities',
              },
              {
                value: 'capital',
                label: 'Capital',
              },
              {
                value: 'revenue',
                label: 'Revenue',
              },
              {
                value: 'cogs',
                label: 'COGS',
              },
              {
                value: 'expences',
                label: 'Expences',
              },
              {
                value: 'other-revenue',
                label: 'Other Revenue',
              },
              {
                value: 'other-expences',
                label: 'Other Expences',
              },
            ]}
          />
        </Form.Item>

        <div className="flex flex-row justify-between">
          <Form.Item
            label="Acc.Control :"
            name="accControl"
            layout="vertical"
            className="w-full h-14"
          >
            <Select
              // defaultValue="general"
              className="w-full"
              onChange={handleChangeAccControl}
              options={[
                {
                  value: 'none',
                  label: 'None',
                },
                {
                  value: 'cash/bank',
                  label: 'Cash/Bank',
                },
                {
                  value: 'acc-receivable',
                  label: 'Acc. Receivable',
                },
                {
                  value: 'acc-payable',
                  label: 'Acc. Payable',
                },
                {
                  value: 'fixed-asset',
                  label: 'Fixed Asset',
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Currency"
            name="currency"
            layout="vertical"
            className="w-full h-14"
          >
            <Select
              // defaultValue="lucy"
              // style={{
              //   width: 120,
              // }}
              className="w-full"
              onChange={handleChangeCurrency}
              options={[
                {
                  value: 'std',
                  label: 'STD',
                },
                {
                  value: 'usd',
                  label: 'USD',
                },
              ]}
            />
          </Form.Item>
        </div>
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
    </>
  );
};

export default FormInput;
