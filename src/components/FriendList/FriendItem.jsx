import PropTypes from 'prop-types';
import {
  Item,
  Status,
  Avatar,
  Name,
} from 'components/FriendList/FriendList.styled';

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar>
        <img src={avatar} alt="User avatar" width="48" />
      </Avatar>
      <Name>{name}</Name>
    </Item>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};