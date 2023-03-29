interface GroupedHistory {
  [year: string]: {
    year: number;
    history: {
      id: number;
      month: number;
      year: number;
      total: number;
    }[];
  };
}

export default GroupedHistory;
