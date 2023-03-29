import moment from 'moment';
import GroupedHistory from '../../@types/Lists/GroupedHistory';

/**
 * Sorts the grouped history by year in descending order
 * @param {GroupedHistory} groupedHistory - Grouped history object
 * @returns Sorted grouped history object
 */
const sortByYear = (groupedHistory: GroupedHistory) => {
  return Object.values(groupedHistory).sort((a, b) => {
    return moment(b.year, 'YYYY').diff(moment(a.year, 'YYYY'));
  });
};

export default sortByYear;
