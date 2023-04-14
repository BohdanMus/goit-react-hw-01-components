import PropTypes from 'prop-types';
import { FriendsCard } from './FriendsList.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <FriendsCard>
      <span style={{ background: isOnline ? 'green' : 'red' }}>{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendsCard>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
