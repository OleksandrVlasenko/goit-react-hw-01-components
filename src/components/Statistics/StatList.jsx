import PropTypes from 'prop-types';
import { StatItem, StastListEl } from 'components/Statistics/index';


export const StatList = ({ stats }) => {
  return (
    <StastListEl>
      {stats.map(({ id, label, percentage }) => {
        return (
          <StatItem
            key={id}
            label={label}
            percentage={percentage}
            
          />
        );
      })}
    </StastListEl>
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
