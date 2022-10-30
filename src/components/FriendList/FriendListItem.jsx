import PropTypes from 'prop-types';



export const FriendListItem = ({avatar, name, isOnline, id}) => {
    return  <li className="item">
                <span className={isOnline ? true : false}></span>
                <img className={avatar} src={avatar} alt={name} width="48" />
                <p className="name">{name}</p>
            </li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:  PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}