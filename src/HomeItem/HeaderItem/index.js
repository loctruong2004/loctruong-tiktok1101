import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMusic,faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '~/component/Button';
import classNames from 'classnames/bind';
import styles from './HeaderItem.module.scss';
import { Children, useState } from 'react';
const cx = classNames.bind(styles);
function HeaderItem({data}){
    const [follow,setFollow]=  useState(true);
    const HandleFollow =()=>{
        setFollow(!follow)
    }
    return (
           <div className={cx('info')}>
                <div className={cx('name-wrapper')}>
                    <div className={cx('name')}>
                <h3>{data.user.nickname}</h3>
                <div className={cx('check')}>
                    {data.user.tick?<FontAwesomeIcon icon={faCircleCheck} />:''}
                
                </div>
                <h4>{data.user.first_name}</h4>
                    </div>
                <div className={cx('description')}>
                    <span>{data.description}</span>
                </div>
                    <div className={cx('mussic')}>
                    <FontAwesomeIcon icon={faMusic} />
                    <span>nhạc nền</span>
                    </div>
                </div>
                    <div className={cx('follow')}>
                        <Button primary={follow} onClick={HandleFollow}>{follow?'Follow':'Đang Follow'}</Button>
                    </div>
           </div>
    )
}
export default HeaderItem