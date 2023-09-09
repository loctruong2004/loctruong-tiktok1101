import { useEffect, useRef,useState } from 'react';
import HomeItem from "~/HomeItem"
import * as ListvideoServices from '~/apiServes/ListvideoServices'

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

const init_page = Math.floor(Math.random()*100);
function Home (){
    const [listvideo,setVideos] = useState([]);
    const [page,setpage] =useState(init_page);
    const [scrolly,setScrolly]= useState(0);
    const [indexPlay,setIndexPlay]= useState(0); 
    const [indexPlayOld,setIndexPlayOld]= useState(1)

    useEffect(()=>{
        ListvideoServices
        .listVideos({page})
        .then((data)=>{
            listvideo.length===0?setVideos(data):setVideos(prev=>[...prev,...data])
            setScrolly(scrolly+767*data.length)
        })
        .catch((error)=>console.log(error))
    },[page])
    
    window.onscroll = ()=>{
        if(window.scrollY>=scrolly-100){
            setpage(Math.floor(Math.random()*100));
        }
        // if((Math.floor(window.scrollY/767))!==autoplay){
        //     setVideoPlay(Math.floor(window.scrollY/767))
        // }
    }
   
    
    const HandleScroll =()=>{
        if(Math.floor(window.scrollY/767)!==indexPlay){
            setIndexPlay( Math.floor(window.scrollY/767));
        }
    }
    // console.log(indexPlay)

    useEffect(() => {
            window.addEventListener('scroll', HandleScroll)
        return () => {
            window.removeEventListener('scroll', HandleScroll);
        }
      }, [])
     
    return (
        <div className={cx('wrapper')}>
             {listvideo.map((data,index)=>{       
                     return     <HomeItem 
                                key={data.id}
                                checkIndex={indexPlay}
                                prop={data}
                                index={index} 
                                />
            }
             )}
                </div>
                )
}
export default Home 