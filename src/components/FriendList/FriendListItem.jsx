import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';



export const FriendListItem = ({avatar, name, isOnline, id}) => {
    return  <li className={css.item}>
                <span className={isOnline ? css.true : css.false}></span>
                <img className={css.avatar} src={avatar} alt={name} width="48" />
                <p className={css.name}>{name}</p>
            </li>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline:  PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}