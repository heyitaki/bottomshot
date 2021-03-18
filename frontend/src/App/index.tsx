import 'antd/dist/antd.css';
import React, { useState } from 'react';
import AddMomentBar from '../components/AddMomentBar';
import MomentList from '../components/MomentList';
import { Moment } from '../models/Moment';
import { getMomentData, transformMomentDataToMoment } from '../routes/moment';
import './index.css';

function App() {
  const [cardsData, setCardsData] = useState<Moment[]>([]);

  async function addCardToTable(url: string) {
    const data = transformMomentDataToMoment(await getMomentData(url));
    setCardsData((cardsData) => [...cardsData, data]);
  }

  function removeCardFromTable() {}

  return (
    <div className="page-wrapper">
      <AddMomentBar addCard={addCardToTable} />
      <MomentList cardsData={cardsData} removeCard={removeCardFromTable} />
    </div>
  );
}

export default App;
