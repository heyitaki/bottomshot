export const getMomentData = (url: string): Promise<IMoment> => {
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

export interface IMoment {
  circulationCount: number;
  minPrice: number;
  minPriceSerialNumber: number;
  playerName: string;
  setName: string;
  setSeriesNumber: number;
  topshotId: string;
  url: string;
}
