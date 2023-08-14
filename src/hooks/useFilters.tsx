import { useState } from 'react';
import { useBeers } from './useBeers';

export const useFilters = () => {
  const [abvFilter, setAbvFilter] = useState({
    abv_lt: '',
    abv_gt: '',
    text: '',
  });

  const [ibuFilter, setIbuFilter] = useState({
    ibu_lt: '',
    ibu_gt: '',
    text: '',
  });

  const [ebcFilter, setEbcFilter] = useState({
    ebc_lt: '',
    ebc_gt: '',
    text: '',
  });

  const abvItems = [
    {
      text: 'Light',
      setFilter: () => setAbvFilter({ abv_lt: '4', abv_gt: '', text: 'Light' }),
    },
    {
      text: 'Session',
      setFilter: () => setAbvFilter({ abv_lt: '6', abv_gt: '4', text: 'Session' }),
    },
    {
      text: 'Strong',
      setFilter: () => setAbvFilter({ abv_lt: '8', abv_gt: '6', text: 'Strong' }),
    },
    {
      text: 'Very Strong',
      setFilter: () => setAbvFilter({ abv_lt: '', abv_gt: '8', text: 'Very Strong' }),
    },
  ];

  const ibuItems = [
    {
      text: 'Low',
      setFilter: () => setIbuFilter({ ibu_lt: '20', ibu_gt: '', text: 'Low' }),
    },
    {
      text: 'Moderate',
      setFilter: () => setIbuFilter({ ibu_lt: '40', ibu_gt: '20', text: 'Moderate' }),
    },
    {
      text: 'Medium',
      setFilter: () => setIbuFilter({ ibu_lt: '60', ibu_gt: '40', text: 'Medium' }),
    },
    {
      text: 'High',
      setFilter: () => setIbuFilter({ ibu_lt: '80', ibu_gt: '60', text: 'High' }),
    },
    {
      text: 'Very bitter',
      setFilter: () => setIbuFilter({ ibu_lt: '', ibu_gt: '80', text: 'Very bitter' }),
    },
  ];

  const ebcItems = [
    {
      text: 'Pale',
      setFilter: () => setEbcFilter({ ebc_lt: '8', ebc_gt: '', text: 'Pale' }),
    },
    {
      text: 'Amber',
      setFilter: () => setEbcFilter({ ebc_lt: '17', ebc_gt: '8', text: 'Amber' }),
    },
    {
      text: 'Brown',
      setFilter: () => setEbcFilter({ ebc_lt: '35', ebc_gt: '17', text: 'Brown' }),
    },
    {
      text: 'Dark',
      setFilter: () => setEbcFilter({ ebc_lt: '50', ebc_gt: '35', text: 'Dark' }),
    },
    {
      text: 'Black',
      setFilter: () => setEbcFilter({ ebc_lt: '', ebc_gt: '50', text: 'Black' }),
    },
  ];

  const clearFilters = () => {
    setAbvFilter({ abv_lt: '', abv_gt: '', text: '' });
    setIbuFilter({ ibu_lt: '', ibu_gt: '', text: '' });
    setEbcFilter({ ebc_lt: '', ebc_gt: '', text: '' });
  };

  const { beersQuery } = useBeers({ abvFilter, ibuFilter, ebcFilter });

  return {
    abvItems,
    ibuItems,
    ebcItems,
    abvFilter,
    ibuFilter,
    ebcFilter,
    clearFilters,
    beersQuery,
  };
};
