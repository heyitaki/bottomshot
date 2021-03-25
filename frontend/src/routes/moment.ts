import { Moment } from '../models/Moment';

export const getMomentData = (url: string): Promise<MomentData> => {
  return fetch('http://localhost:5000/getPrices', {
    method: 'POST',
    body: JSON.stringify(url),
    headers: new Headers({
      'content-type': 'application/json',
    }),
  }).then((response) => response.json());
};

export const transformMomentDataToMoment = (data: MomentData): Moment => {
  return {
    key: data.topshotId,
    playerName: data.playerName,
    momentName: `${data.playType}, ${new Date(data.playDate).toLocaleDateString('en-US')}`,
    setName: `${data.setName} (Series ${data.setSeriesNumber})`,
    lowestPrice: Math.round(data.minPrice),
    diffNextLowest: 10,
    url: data.url,
  };
};

export interface MomentData {
  circulationCount: number;
  minPrice: number;
  minPriceSerialNumber: number;
  playDate: string;
  playerName: string;
  playType: string;
  setName: string;
  setSeriesNumber: number;
  topshotId: string;
  url: string;
}
