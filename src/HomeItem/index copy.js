import { useEffect, useRef,useState,forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faCommentDots,faShare,faBookmark,faPlay,faPause  } from '@fortawesome/free-solid-svg-icons';
import Video from './videos'
import ActionVideo from '~/component/ActionVideo'
import HeaderItem from './HeaderItem'
import classNames from 'classnames/bind';
import styles from './HomeItem.module.scss';
import Profile from '~/component/ImageAccount'
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function HomeItem(prop,ref){
    const  [play,setPlay] = useState(false);
    const [videoPlay,setVideoPlay] = useState(false);
    console.log(videoPlay)
    const videoRef=useRef();
    // use useIsInViewport
    const HanldeVolume = (e)=>{
        const vol = e.target.value;
        videoRef.current.volumes(vol);
    }
    const HandleClick = ()=>{
        setPlay(!play);
        if(play){
            videoRef.current.pause();
        }else{
            videoRef.current.play();
            
        }
    }
    return (
        <div  className={cx('wrapper')}>
    <Link >
        <div className={cx('avatar')}>
        <Profile  src={prop.user.avatar}/>
        </div>
    </Link>   
         <div className={cx('content')}>
        <div className={cx('wrapper-content')}>
                <HeaderItem data={prop}/>
            <div className={cx('wrapper-video')}>
                <div className={cx('component-video')}>
                        <Video 
                        key={prop.id}
                        ref={videoRef} 
                        src={prop.file_url}
                        onclick={()=>HandleClick()} 
                        volum={HanldeVolume} 
                        icons={play?faPause:faPlay} 
                        />
                </div>
                <div className={cx('wrapp-action-video')}>
                    <div className={cx('action-video')}>
                            <ActionVideo count={prop.likes_count} icons={faHeart} />
                            <ActionVideo count={prop.comments_count} icons={faCommentDots} />
                            <ActionVideo count={prop.collect_count} icons={faBookmark} />
                            <ActionVideo count={prop.shares_count} icons={faShare} />
                    </div>
                </div>
            </div>
        </div>
         </div>
        </div>
    )
}

export default forwardRef(HomeItem)