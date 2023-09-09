import classNames from 'classnames/bind';
import styles from './Poper.module.scss';
const cx= classNames.bind(styles);
function Poper({children,className}){
    return <div className={cx('wrapper',className)}>
        {children}
        </div>
}
export default Poper