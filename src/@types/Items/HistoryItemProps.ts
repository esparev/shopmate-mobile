/**
 * History item props interface for HistoryItem component
 * @interface HistoryItemProps
 * @property {object} history - History
 * @property {number} history.id - History id
 * @property {number} history.month - History month
 * @property {number} history.year - History year
 * @property {number} history.total - History total
 */
interface HistoryItemProps {
  history: {
    id: number;
    month: number;
    year: number;
    total: number;
  };
}

export default HistoryItemProps;
