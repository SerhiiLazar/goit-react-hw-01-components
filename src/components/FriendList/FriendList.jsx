import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';

export const FriendList = ({friends}) => {
    
    return <ul className="friend-list">
    {friends.map(({avatar, name, isOnline, id}) => {
      return <FriendListItem 
      key={id}
      avatar={avatar}
      name={name}
      isOnline={isOnline}
      id={id}
      />
    })}
    
    </ul>
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:  PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }))
}