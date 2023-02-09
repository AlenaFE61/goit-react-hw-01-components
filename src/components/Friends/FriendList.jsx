import PropTypes from 'prop-types';
import css from './Friends.module.css';
import {FriendListItem} from './FriendListItem';

export const FriendList = ({ friends }) => {
  // console.log(friends);

  return (
    <div className={css.friends}>
      <ul className={css.friends__list}>
        {friends.map(friends  => (
          <FriendListItem 
          key={friends.id}
          avatar={friends.avatar}
          isOnline={friends.isOnline}
          name={friends.name}
          ></FriendListItem>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};