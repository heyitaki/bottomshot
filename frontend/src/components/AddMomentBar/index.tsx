import { Button } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

type AddMomentBarProps = {
  addMoment: Function;
};

export default function AddMomentBar({ addMoment }: AddMomentBarProps) {
  return (
    <React.Fragment>
      <div>Placeholder for where you will pass in the URL of your card</div>
      <Button
        type="primary"
        onClick={() =>
          addMoment(
            'https://www.nbatopshot.com/listings/p2p/122b048d-585e-4c63-8275-c23949576fd6+ec2200a8-c6a9-4d67-9c26-987c558dc50e',
          )
        }
      >
        {' '}
        Add Card to List
      </Button>
    </React.Fragment>
  );
}
