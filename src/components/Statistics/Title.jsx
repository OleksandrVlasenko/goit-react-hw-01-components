import PropTypes from 'prop-types';
import { TitleEl } from 'components/Statistics/index';

export const Title = ({ title }) => {
  if (title) {
    return <TitleEl>{title}</TitleEl>;
  }
};

Title.propTypes = {
  title: PropTypes.string,
};
