import classNames from 'classnames/bind';
import styles from './ActionVideo.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faCommentDots,faShare,faBookmark  } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ActionVideo({to,href,icons,primary,count,children,onClick,...passProp}){
    let Comp ='button';
    const props={
        onClick,
        ...passProp
    }
    if(to){
       props.to=to;
       Comp='Link';
    }
    const classes= cx('actions',{primary});
    return (
        <div className={cx('box-Item')}>
            <Comp className={classes} {...props}>
                    <span>
                        <FontAwesomeIcon icon={icons} />
                    </span>
            </Comp>
            <div className={cx('flex-count')}>
            <strong>{count>10000?`${count/1000}k`:count}</strong>
            </div>
        </div>
    )
}
export default ActionVideo