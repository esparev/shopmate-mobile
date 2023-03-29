/**
 * GroupedHistory interface for grouped history object
 * @interface GroupedHistory
 * @property {string} year - Year
 * @property {number} year - Year
 * @property {object[]} history - History
 * @property {number} history.id - History id
 * @property {number} history.month - History month
 * @property {number} history.year - History year
 * @property {number} history.total - History total
 */
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
