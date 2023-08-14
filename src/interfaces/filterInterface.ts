export type FilterProps = {
  abvItems: {
    text: string;
    setFilter: () => void;
  }[];
  abvFilter: {
    abv_lt: string;
    abv_gt: string;
    text: string;
  };
  ibuItems: {
    text: string;
    setFilter: () => void;
  }[];

  ibuFilter: {
    ibu_lt: string;
    ibu_gt: string;
    text: string;
  };
  ebcItems: {
    text: string;
    setFilter: () => void;
  }[];
  ebcFilter: {
    ebc_lt: string;
    ebc_gt: string;
    text: string;
  };
  clearFilters: () => void;
};
