import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { CardInfo } from '../../App';

type MomentListProps = {
  cardsData: CardInfo[],
  removeCard: Function
}

const columns: ColumnsType<CardInfo> = [
  {
    key: 'cardName',
    title: 'Card Name',
    dataIndex: 'cardName',
  },
  {
    key: 'setName',
    title: 'Set Name',
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
  }
];

export default function MomentList({cardsData, removeCard}: MomentListProps) {
  return (
    <Table<CardInfo>
      pagination={false}
      columns={columns}
      dataSource={cardsData}
    />
  );
}
