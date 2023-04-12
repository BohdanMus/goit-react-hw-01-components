import PropTypes from 'prop-types';
import { BiAt } from "react-icons/bi";
import {ProfileCard, ProfileDescription, ProfileStats} from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <img src={avatar} alt={username} />
        <p>{username}</p>
        <p><BiAt/>{tag}</p>
        <p>{location}</p>
      </ProfileDescription>
      <ProfileStats>
        <li>
          <span>Followers: </span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views: </span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes: </span>
          <span>{stats.likes}</span>
        </li>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
