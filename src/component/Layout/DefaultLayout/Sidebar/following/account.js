import { Link } from "react-router-dom";
import classNames from 'classnames/bind';
import Profile from '~/component/ImageAccount'
import styles from './following.module.scss' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const cx= classNames.bind(styles);

function ResultAccount({prop}){
    console.log(prop)
    return (
       <Link to={`/@${prop.nickname}`} onClick={()=>Profile.location.reload()}  className={cx('wrapper-account')}>
            <Profile src={prop.avatar}/>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                     <span>{prop.first_name}</span>
                     <div className={cx('check-icon')}>
                     {prop.tick?<FontAwesomeIcon icon={faCircleCheck} />:''}
                     </div>
                    </h4>
                    <span>{prop.nickname}</span>
                </div>
       </Link>
    )
}

export default ResultAccount