import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { Moment } from '../../models/Moment';

type MomentListProps = {
  moments: Moment[];
  removeMoment: Function;
};

const columns: ColumnsType<Moment> = [
  {
    key: 'momentName',
    title: 'Moment',
    dataIndex: 'momentName',
  },
  {
    key: 'setName',
    title: 'Set',
    dataIndex: 'setName',
  },
  {
    key: 'lowestPrice',
    title: 'Lowest Price',
    dataIndex: 'lowestPrice',
  },
  {
    key: 'diffNextLowest',
    title: 'Difference between next lowest price',
    dataIndex: 'diffNextLowest',
  },
];

export default function MomentList({ moments, removeMoment }: MomentListProps) {
  return <Table<Moment> pagination={false} columns={columns} dataSource={moments} />;
}
