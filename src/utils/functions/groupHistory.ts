import HistoryArrayProps from '../../@types/Lists/HistoryArrayProps';
import GroupedHistory from '../../@types/Lists/GroupedHistory';

/**
 * Groups history by year
 * @param {HistoryArrayProps} history - Array of history objects
 * @returns {GroupedHistory} Grouped history
 */
const groupHistory = ({history}: HistoryArrayProps) => {
  const groupedHistory: GroupedHistory = history.reduce((group, item) => {
    const year = item.year;

    if (!group[year]) {
      group[year] = {
        year,
        history: [],
      };
    }
    group[year].history.push(item);
    return group;
  }, {} as GroupedHistory);

  return groupedHistory;
};

export default groupHistory;
