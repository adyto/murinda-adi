import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Select, Space } from 'antd';
const { Option } = Select;

const FormInput = () => {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [accType, setAccType] = useState('general');
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [dataCOA, setDataCOA] = useState([]);
  const [resAccGroup, setResAccGroup] = useState([]);

  useEffect(() => {
    if (accType === 'general' && selectedLevel > 1) {
      const dataCOA = [
        {
          kodeAcc: '1',
          namaAcc: 'Asset',
          groupName: 'Asset',
          level: '1',
          parentAcc: '',
        },
        {
          kodeAcc: '11',
          namaAcc: 'Asset Lancar',
          groupName: 'Assets',
          level: '2',
          parentAcc: '1',
        },
        {
          kodeAcc: '211',
          namaAcc: 'Hutang Bank Jk Pendek',
          groupName: 'Liabilities',
          level: '3',
          parentAcc: '21',
        },
        {
          kodeAcc: '41.01.001',
          namaAcc: 'Pendapatan Proyek Sipil',
          groupName: 'Revenue',
          level: '4',
          parentAcc: '41.01',
        },
        {
          kodeAcc: '211.01.02',
          namaAcc: 'Mandiri IDR',
          groupName: 'Liabilities',
          level: '5',
          parentAcc: '211.01',
        },
      ];
      const filterDataCOA = dataCOA.filter((x) => x.level < selectedLevel);
      const filterLevel = selectedLevel - 1;

      let arrayResultCOA = [];
      for (let i = 0; i < filterDataCOA.length; i++) {
        if (filterDataCOA[i].level == filterLevel) {
          arrayResultCOA.push(filterDataCOA[i]);
        }
      }
      setDataCOA(arrayResultCOA);
    }
  }, [accType, selectedLevel]);
  console.log(dataCOA);
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
    const filterAccGroup = dataCOA.filter((x) => x.parentAcc === value);
    setResAccGroup(filterAccGroup[0]?.groupName);
  };

  const handleChangeAccGroup = (value) => {
    console.log(value);
  };

  const handleChangeAccControl = (value) => {
    console.log(value);
  };

  const handleChangeCurrency = (value) => {
    setSelectedCurrency(value);
    console.log(value);
  };
  console.log(resAccGroup);

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
              // defaultValue={accType === '' ? 'general' : accType}
              defaultValue={'general'}
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
              required:
                selectedLevel === 1 || dataCOA !== undefined ? false : true,
              message: 'Please input your acc parents!',
            },
          ]}
          className="h-14"
        >
          <Select
            //   defaultValue="lucy"
            className="w-full"
            onChange={handleChangeAccParents}
            disabled={
              accType === 'general' && selectedLevel === 1 ? true : false
            }
            // options={[
            //   {
            //     value: 'general',
            //     label: 'General',
            //   },
            //   {
            //     value: 'Detil',
            //     label: 'detil',
            //   },
            // ]}
          >
            {dataCOA.map((item) => (
              <Select.Option value={item.parentAcc}>
                {item.kodeAcc}
              </Select.Option>
            ))}
          </Select>
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
          {accType === 'general' && selectedLevel > 1 ? (
            // <Select
            //   // defaultValue="lucy"
            //   defaultValue={resAccGroup}
            //   className="w-full"
            //   disabled
            //   options={[
            //     {
            //       value: `${resAccGroup}`,
            //       label: `${resAccGroup}`,
            //     },
            //   ]}
            // >
            //   {/* <Select.Option value={resAccGroup}>{resAccGroup}</Select.Option> */}
            // </Select>
            <Input value={`${resAccGroup}`} />
          ) : (
            <Select
              //   defaultValue="lucy"
              className="w-full"
              onChange={handleChangeAccGroup}
            >
              <Select.Option value="asset">Asset</Select.Option>
              <Select.Option value="liabilities">Liabilities</Select.Option>
              <Select.Option value="capital">Capital</Select.Option>
              <Select.Option value="revenue">Revenue</Select.Option>
              <Select.Option value="cogs">COGS</Select.Option>
              <Select.Option value="expences">Expences</Select.Option>
              <Select.Option value="other-revenue">Other Revenue</Select.Option>
              <Select.Option value="other-expences">
                Other Expences
              </Select.Option>
            </Select>
          )}
        </Form.Item>
        <div className="flex flex-row justify-between">
          <Form.Item
            label="Acc.Control:"
            name="accControl"
            layout="vertical"
            className="w-full h-14"
            rules={[
              {
                required: accType === 'detil' ? true : false,
                message: 'Please select a type of control',
              },
            ]}
          >
            <Select
              // defaultValue="general"
              className="w-full"
              onChange={handleChangeAccControl}
              disabled={
                accType === 'general' && selectedLevel === 1 ? true : false
              }
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
              disabled={
                accType === 'general' && selectedLevel === 1 ? true : false
              }
              options={[
                {
                  value: 'std',
                  label: 'STD',
                },
                {
                  value: 'usd',
                  label: 'USD',
                },
                {
                  value: 'euro',
                  label: 'EURO',
                },
              ]}
            />
          </Form.Item>
        </div>
        <Checkbox
          onChange={(e) => console.log(e.target.checked)}
          disabled={accType === 'general' && selectedLevel === 1 ? true : false}
        >
          Department
        </Checkbox>
        {selectedCurrency !== 'std' ? null : (
          <Checkbox onChange={(e) => console.log(e.target.checked)}>
            Gain-loss
          </Checkbox>
        )}
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
