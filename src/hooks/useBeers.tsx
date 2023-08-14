import { useQuery } from 'react-query';
import { punkApi } from '../api/punkApi';
import { Beer } from '../interfaces/beerInterface';

const getBeers = async (
  { abv_lt, abv_gt }: { abv_lt: string; abv_gt: string },
  { ibu_lt, ibu_gt }: { ibu_lt: string; ibu_gt: string },
  { ebc_lt, ebc_gt }: { ebc_lt: string; ebc_gt: string },
): Promise<Beer[]> => {
  const params = new URLSearchParams();

  if (abv_lt) {
    params.append('abv_lt', abv_lt);
  }
  if (abv_gt) {
    params.append('abv_gt', abv_gt);
  }

  if (ibu_lt) {
    params.append('ibu_lt', ibu_lt);
  }
  if (ibu_gt) {
    params.append('ibu_gt', ibu_gt);
  }

  if (ebc_lt) {
    params.append('ebc_lt', ebc_lt);
  }
  if (ebc_gt) {
    params.append('ebc_gt', ebc_gt);
  }

  const filter = params.toString();

  const { data } = await punkApi.get(`/beers${filter ? `?${filter}` : ''}`);
  return data;
};
export const useBeers = ({
  abvFilter,
  ibuFilter,
  ebcFilter,
}: {
  abvFilter: { abv_lt: string; abv_gt: string };
  ibuFilter: { ibu_lt: string; ibu_gt: string };
  ebcFilter: { ebc_lt: string; ebc_gt: string };
}) => {
  const beersQuery = useQuery(['beers', { abvFilter, ibuFilter, ebcFilter }], () =>
    getBeers(abvFilter, ibuFilter, ebcFilter),
  );
  return {
    beersQuery,
  };
};
