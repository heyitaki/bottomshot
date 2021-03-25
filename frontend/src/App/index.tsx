import 'antd/dist/antd.css';
import React, { useState } from 'react';
import AddMomentBar from '../components/AddMomentBar';
import MomentList from '../components/MomentList';
import { Moment } from '../models/Moment';
import { getMomentData, transformMomentDataToMoment } from '../routes/moment';
import './index.css';

function App() {
  const [moments, setMoments] = useState<Moment[]>([]);

  async function addMomentToTable(url: string) {
    const newMoment = transformMomentDataToMoment(await getMomentData(url));
    setMoments((moments) => [...moments, newMoment]);
  }

  function removeMomentFromTable() {}

  return (
    <div className="page-wrapper">
      <AddMomentBar addMoment={addMomentToTable} />
      <MomentList moments={moments} removeMoment={removeMomentFromTable} />
    </div>
  );
}

export default App;
