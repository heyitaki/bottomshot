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
    key: 'playerName',
    title: 'Player',
    dataIndex: 'playerName',
  },
  {
    key: 'setName',
    title: 'Set',
    dataIndex: 'setName',
  },
  {
    key: 'momentName',
    title: 'Moment',
    dataIndex: 'momentName',
  },
  {
    key: 'lowestPrice',
    title: 'Min price',
    dataIndex: 'lowestPrice',
  },
  {
    key: 'diffNextLowest',
    title: '+/- Avg min',
    dataIndex: 'diffNextLowest',
  },
];

export default function MomentList({ moments, removeMoment }: MomentListProps) {
  return <Table<Moment> pagination={false} columns={columns} dataSource={moments} />;
}
