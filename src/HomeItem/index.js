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
function HomeItem({prop,checkIndex,index}){
    const [play,setPlay]= useState(true);
    const videoRef=useRef();

    const HandlePlay =()=>{
       setPlay(!play);
    }
   
    const HanldeVolume = (e)=>{
        const vol = e.target.value;
        videoRef.current.volume=vol/100;
    }

    useEffect(()=>{
      
        if(checkIndex===index){
            setPlay(true)
           
        }else {
            setPlay(false)
    }
    },[checkIndex])

    useEffect(()=>{
    // //   const myPromise= new Promise(function(resolve,reject){
    // // //    if(videoRef.current.readyState > videoRef.current.HAVE_CURRENT_DATA){
    // //     if(checkIndex===index){
    // //         return resolve(play)
    // //     }
    // //     // }
    // //       })
    // //     myPromise 
    // //     .then(()=>{
    // //         if(play){
    // //         videoRef.current.play();
    // //         videoRef.current.muted=!videoRef.current.muted;
    // //         console.log(videoRef.current.readyState);
    // //         console.log("playvideo",prop.id);
    // //         }
    // //         return play
    // //     })
    // //     .then((data)=>{
    // //         if(!data){
    // //             console.log(111)
    // //             videoRef.current.pause();
    // //         }
    // //     videoRef.current.muted=false;
    // //     })
    // //     .catch(()=>{
    // //         console.log("error")
    // //     })
    const isPlaying = videoRef.current.readyState >=1
    if(isPlaying){
        if(play){
                    videoRef.current.play();
                    videoRef.current.muted=!videoRef.current.muted;
                    console.log(videoRef.current.HAVE_CURRENT_DATA);
                    console.log("playvideo",prop.id);
            }else {
                console.log(111);
                videoRef.current.pause();
                videoRef.current.muted=true;
            }
    }    
    },[play])
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
                        onclick={HandlePlay} 
                        volum={HanldeVolume} 
                        icons={play?faPause:faPlay} 
                        Setmuted={play}
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

export default HomeItem