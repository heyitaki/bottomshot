import { Input } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

const { Search } = Input;

type AddMomentBarProps = {
  addMoment: Function;
};

export default function AddMomentBar({ addMoment }: AddMomentBarProps) {
  return (
    <>
      <Search
        placeholder="Moment URL"
        allowClear
        enterButton="->"
        onSearch={(url) => addMoment(url)}
      />
    </>
  );
}
