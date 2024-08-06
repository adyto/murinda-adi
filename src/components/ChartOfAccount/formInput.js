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

  const [form] = Form.useForm();
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        break;
      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        break;
      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
        break;
      default:
    }
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
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
              defaultValue="lucy"
              className="w-full"
              onChange={handleChangeType}
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'Yiminghe',
                  label: 'yiminghe',
                },
                {
                  value: 'disabled',
                  label: 'Disabled',
                  disabled: true,
                },
              ]}
            />
          </Form.Item>
          <Form.Item
            label="Level"
            name="level"
            layout="vertical"
            className="w-full h-14"
          >
            <Select
              // defaultValue="lucy"
              // style={{
              //   width: 120,
              // }}
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
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
              {
                value: 'Yiminghe',
                label: 'yiminghe',
              },
              {
                value: 'disabled',
                label: 'Disabled',
                disabled: true,
              },
            ]}
          />
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
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        className="flex flex-col"
      >
        <Form.Item
          name="note"
          label="Note"
          layout="vertical"
          rules={[
            {
              required: true,
            },
          ]}
          className="inline-block h-20"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue('gender') === 'other' ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormInput;
