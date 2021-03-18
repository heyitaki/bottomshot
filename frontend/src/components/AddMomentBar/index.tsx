import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';


type AddMomentBarProps = {
  addCard: Function
}

export default function AddMomentBar({addCard}: AddMomentBarProps) {
  return (
    <React.Fragment>
      <div>Placeholder for where you will pass in the URL of your card</div>
      <Button type="primary" onClick={() => addCard('www.topshot.com/jasontatum')}> Add Card to List</Button>
    </React.Fragment>
  );
}
