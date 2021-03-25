import { Button, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { urlRegex } from '../../utils/moment';

type AddMomentBarProps = {
  addMoment: Function;
};

export default function AddMomentBar({ addMoment }: AddMomentBarProps) {
  const [form] = Form.useForm();

  return (
    <>
      <Form
        form={form}
        layout="inline"
        onFinish={(values) => {
          addMoment(values.url);
          form.resetFields();
        }}
      >
        <Form.Item
          name="url"
          rules={[
            {
              pattern: urlRegex,
              message: 'Please provide a valid listing URL',
            },
          ]}
        >
          <Input type="text" placeholder="Moment URL" autoComplete="off" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
