import { Link } from "react-router-dom";
import classNames from 'classnames/bind';
import Profile from '~/component/ImageAccount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './Resultsearch.module.scss' ;
const cx= classNames.bind(styles);

function ResultAccount({data}){
    console.log(data)
    return (
       <Link to={`/@${data.nickname}`} onClick={()=>Profile.location.reload()} className={cx('wrapper')}>
                    <Profile src={data.avatar}/>
        <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.last_name}</span>
                        <div className={cx('check-icon')}>
                            {data.tick?<FontAwesomeIcon icon={faCircleCheck} />:''}
                        </div>
                    </h4>
                    <span>{data.full_name}</span>
                </div>
       </Link>
    )
}

export default ResultAccount