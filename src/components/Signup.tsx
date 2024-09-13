import React, { useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
  Segmented,
} from "antd";
import type { FormProps } from "antd";
import "./Signup.css";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const signup: React.FC = () => {
  const [componentVariant, setComponentVariant] =
    useState<FormProps["variant"]>("filled");

  const onFormVariantChange = ({
    variant,
  }: {
    variant: FormProps["variant"];
  }) => {
    setComponentVariant(variant);
  };
  return (
    <>
      <div className="i">
        <Form
          {...formItemLayout}
          onValuesChange={onFormVariantChange}
          variant={componentVariant}
          style={{ maxWidth: 600 }}
          initialValues={{ variant: componentVariant }}
        >
          <Form.Item label="Form variant" name="variant">
            <Segmented options={["outlined", "filled", "borderless"]} />
          </Form.Item>

          <Form.Item
            label="Name"
            name="Input"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="create userName"
            name="Input"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label=" Generate Password"
            name="Input"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mobile no"
            name="InputNumber"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Address"
            name="TextArea"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Id card no"
            name="Mentions"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Mentions />
          </Form.Item>

          <Form.Item
            label="Designation"
            name="Input"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input />
          </Form.Item>
{/* 
          <Form.Item
            label="Select"
            name="Select"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Select />
          </Form.Item> */}

          {/* <Form.Item
            label="Cascader"
            name="Cascader"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Cascader />
          </Form.Item> */}

          {/* <Form.Item
            label="TreeSelect"
            name="TreeSelect"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <TreeSelect />
          </Form.Item> */}

          {/* <Form.Item
            label="DatePicker"
            name="DatePicker"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="RangePicker"
            name="RangePicker"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <RangePicker />
          </Form.Item> */}

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        
      </div>
    </>
  );
};

export default signup;
