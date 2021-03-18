import React, { useEffect, useState } from 'react';
import AddMomentBar from "../components/AddMomentBar";
import MomentList from "../components/MomentList";
import "./index.css";
import 'antd/dist/antd.css';


export interface CardInfo {
  key: number;
  cardName: string;
  setName: string;
  lowestPrice: number;
  diffNextLowest: number;
}

function App() {
  const [cardsData, setCardsData] = useState<CardInfo[]>([]);

  function addCardToTable(url: string) {
    // this is where we will query our backend server to get the actual data for the passed in url.
    const data: CardInfo = {
      key: 0,
      cardName: 'Tim Duncan (#1/150)',
      setName: 'Seeing Stars',
      lowestPrice: 8000,
      diffNextLowest: 100,
    };
    setCardsData(cardsData => [...cardsData, data]);
  }

  function removeCardFromTable() {

  }

  return (
    <div className="page-wrapper">
      <AddMomentBar addCard={addCardToTable} />
      <MomentList cardsData={cardsData} removeCard={removeCardFromTable} />
    </div>
  );
}

export default App;
