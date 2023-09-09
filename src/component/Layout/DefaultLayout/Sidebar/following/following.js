import styles from './following.module.scss';
import ResultAccount from './account'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Follow({children,onClick}){
    return (
        <nav className={cx('wrapper')}>
          <h2>Các tài khoản đang follow</h2>
          {children}
        </nav>
    )
}
export default Follow