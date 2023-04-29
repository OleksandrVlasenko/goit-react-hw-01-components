import PropTypes from 'prop-types';

export const Title = ({ title }) => {
  if (title) {
    return <h2 className="title">{title}</h2>;
  }
};

Title.propTypes = {
  title: PropTypes.string,
};
