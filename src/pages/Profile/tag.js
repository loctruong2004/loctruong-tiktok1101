import classNames from 'classnames/bind';
import Profile from '~/component/ImageAccount';
import styles from './tag.module.scss';
const cx = classNames.bind(styles);

function TagItem({props}){
    console.log(props)
    return(
        <div className={cx("wrapper")}>
         <img src={props.thumb_url} />
        </div>
    )
}
export default TagItem