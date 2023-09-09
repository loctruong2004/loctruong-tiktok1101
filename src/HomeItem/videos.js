import { forwardRef,useImperativeHandle } from 'react';
import Video1 from '~/acess/video/Video1.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay ,faPause,faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './HomeItem.module.scss';
const cx = classNames.bind(styles);

function Video(props,ref){
        // const videoRedf  = useRef();
        // useImperativeHandle(ref,(e)=>({
        //     play(){
        //         videoRedf.current.play();
        //     },
        //     pause(){
        //         videoRedf.current.pause();
        //     },
        //     volumes(e){
        
        //         videoRedf.current.volume = e/100;
        //     },
            
        // }))
    return (
            <div className={cx('video-id')}>
                    <video 
                    ref={ref} 
                    width="322" 
                //     height=" calc(450px + (100vw - 768px) / 1152 * 200)"
                    height="575"
                    autoPlay={true}
                    muted={true}
                
                    >
                       <source src={props.src}
                       type="video/mp4"
                       />
                    </video>
                    <div 
                    className={cx('play-video')}
                    onClick={()=>{props.onclick()}}
                    >
                    <FontAwesomeIcon icon={props.icons} className={cx('play')}/>
                    </div>
                    <div className={cx('wrapp-volume')}>
                        <input 
                        onChange={(e)=>props.volum(e)} 
                        className={cx('progress')} 
                        type="range"  
                        step="1" 
                        min="0" 
                        max="100" 
                        />
                        <div className={cx('volume')} >
                           <FontAwesomeIcon icon={faVolumeHigh} />
                        </div>
                    </div>
            </div>
    )
}
export default forwardRef(Video)