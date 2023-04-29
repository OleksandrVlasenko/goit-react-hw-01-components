import PropTypes from 'prop-types';
import { StatItem } from 'components/Statistics/StatItem';

export const StatList = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(({ id, label, percentage }) => {
        return <StatItem key={id} label={ label} percentage={percentage} />;
      })}
    </ul>
  );
};

StatItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
