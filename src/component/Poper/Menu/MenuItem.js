import classNames from 'classnames/bind';
const cx= classNames.bind(styles);
function MenuItems({children}){
    return (
    <button className={cx('button-wrap')} >
            {children.text}
    </button>

    )
}
export default MenuItems