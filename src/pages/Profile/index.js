import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical, faShare } from '@fortawesome/free-solid-svg-icons';
import * as videoUser from '~/apiServes/userVideos'
import Button from '~/component/Button';
import TagItem from './tag';
import classNames from 'classnames/bind';
import Profile from '~/component/ImageAccount';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profiles(){
  const [name,setName]=useState(window.location.pathname)
  const [follow, setFollow] = useState(true);
  const [user,setUser ] = useState([]);
  const [video,setVideo ] = useState([]);
  const HandleFollow = () => {
    setFollow(!follow)
  }

  useEffect(()=>{
    setName(name);
    console.log(11)
    const fetchAPI = async()=>{
      const result = await videoUser.Videos(name);
      console.log(result)
      setUser(result);
      setVideo(result.videos);
  }
          fetchAPI();
        
  },[window.location.pathname])
  
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("header-information")}>
          <div className={cx("header-information-profile")}>
            <div className={cx("profile")}>
              <Profile w={128} h={128} src={user.avatar} />
            </div>
            <div className={cx("name")}>
              <h1>{user.nickname}</h1>
              <h3>{user.last_name}</h3>
              <div className={cx('follow')}>
                <Button primary={follow} minWidth={250} onClick={HandleFollow}>{follow ? 'Follow' : 'Đang Follow'}</Button>
              </div>
            </div>
          </div>
          <div className={cx("header-information-follow")}>
            <div className={cx("header-information-wrappfollow")}><span>{user.followings_count}</span>Đang Follow </div>
            <div className={cx("header-information-wrappfollow")}><span>{user.followers_count}</span>Follower</div>
            <div className={cx("header-information-wrappfollow")}><span>{user.likes_count}</span>Thích</div>
          </div>
          <div className={cx("header-information-history")}>Chưa có tiểu sử</div>
        </div>
        <div className={cx("header-task")}>
          <div className={cx("wrapp-icon")}>
            <FontAwesomeIcon icon={faShare} />
          </div>
          <div className={cx("wrapp-icon")}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
      </div>
      <div className={cx("wrapp-content")}>
          <div className={cx("header-content")}>
              <div className={cx("sibar-video")}>
                <span>video</span>
              </div>
              <div className={cx("sibar-video")}>
                <span>đã thích</span>
              </div>
          </div>
          <div className={cx("content")}>
            {video.map((data)=><TagItem key={data.id} props={data}/>)}
          </div>
      </div>
    </div>
  )
}
export default Profiles 