import { Moment } from '../models/Moment';

export const getMomentData = (url: string): Promise<MomentData> => {
  return fetch('http://localhost:5000/getPrices', {
    method: 'POST',
    body: JSON.stringify(url),
    headers: new Headers({
      'content-type': 'application/json',
    }),
  }).then((response) => {
    console.log(response);
    return response.json();
  });
};

export const transformMomentDataToMoment = (data: MomentData): Moment => {
  console.log('player name', data.playerName);
  return {
    key: data.topshotId,
    momentName: data.playerName,
    setName: data.setName,
    lowestPrice: data.minPrice,
    diffNextLowest: 10,
  };
};

export interface MomentData {
  circulationCount: number;
  minPrice: number;
  minPriceSerialNumber: number;
  playerName: string;
  setName: string;
  setSeriesNumber: number;
  topshotId: string;
  url: string;
}
