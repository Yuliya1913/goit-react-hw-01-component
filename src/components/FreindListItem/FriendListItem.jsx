import css from 'components/FreindListItem/FriendListItem.module.css';
import clsx from 'clsx';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={clsx(css.status, css[isOnline])}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
