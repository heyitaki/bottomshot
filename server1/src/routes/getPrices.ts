import { parseIdsFromUrl } from '../../../frontend/src/utils/moment';
import { getUserMomentListingsDedicated } from './topshot/getUserMomentListingsDedicated';

export const getPrices = async (url: string) => {
  const { setId, playId } = parseIdsFromUrl(url);
  const listings = await getUserMomentListingsDedicated(setId, playId);

  const data = listings.data.getUserMomentListings.data;
  const minPriceListing = data.momentListings[0];
  return {
    url,
    circulationCount: data.circulationCount,
    minPrice: data.priceRange.min,
    minPriceSerialNumber: minPriceListing.moment.flowSerialNumber,
    playDate: data.play.stats.dateOfMoment,
    playerName: data.play.stats.playerName,
    playType: data.play.stats.playCategory,
    setName: data.set.flowName,
    setSeriesNumber: data.set.flowSeriesNumber,
    topshotId: minPriceListing.id,
  };
};
