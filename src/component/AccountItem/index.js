import classNames from 'classnames/bind';
import styles from './Item.module.scss' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faXmark} from '@fortawesome/free-solid-svg-icons';
const cx= classNames.bind(styles);
function ItemAccount({them}){
    return (
       <li className={cx('wrapper')}>
            {them.icon===undefined?'':them.icon}
            <div className={cx('search-story')}>
                <h4>{them.text}</h4>
            </div>
            <div className={cx('search-close')}>
               {them.close===undefined?'':them.close}
            </div>
       </li>
    )
}
export default ItemAccount