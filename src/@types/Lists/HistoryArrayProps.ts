/**
 * History array props interface for HistoryList component
 * @interface HistoryArrayProps
 * @property {object[]} history - History
 * @property {number} history.id - History id
 * @property {number} history.month - History month
 * @property {number} history.year - History year
 * @property {number} history.total - History total
 */
interface HistoryArrayProps {
  history: {
    id: number;
    month: number;
    year: number;
    total: number;
  }[];
}

export default HistoryArrayProps;
