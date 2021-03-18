import 'antd/dist/antd.css';
import React, { useState } from 'react';
import AddMomentBar from '../components/AddMomentBar';
import MomentList from '../components/MomentList';
import { getMomentData } from '../routes/moment';
import './index.css';

export interface CardInfo {
  key: number;
  cardName: string;
  setName: string;
  lowestPrice: number;
  diffNextLowest: number;
}

function App() {
  const [cardsData, setCardsData] = useState<CardInfo[]>([]);

  async function addCardToTable(url: string) {
    const data = await getMomentData(url);
    const info: CardInfo = {
      key: 0,
      cardName: data.playerName,
      setName: data.setName,
      lowestPrice: data.minPrice,
      diffNextLowest: 10,
    };
    setCardsData((cardsData) => [...cardsData, info]);
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
