import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx= classNames.bind(styles);
function Header({onBack}){
    return (
    <header className={cx('language')} >
        <button className={cx('out-language')} onClick={onBack}>
           <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={cx('text-language')}>
        <h4>Language</h4>
        </div>
    </header>
    )
}
export default Header