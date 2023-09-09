import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss' ;
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem'
import ResultAccount from './following/account';
import * as listFollow from '~/apiServes/following';
import Follow from './following/following';
import  routeConfig from '~/config/routes'
import { HomeIcon,GroupIcon,TimerIcon,LiveIcon } from '~/component/icons';
import Tippy from '@tippyjs/react';

const cx= classNames.bind(styles);
const init_count =1;
function Sidebar(){
  const [user,setUser] = useState(init_count)
  const [userFollow,setFollow] =  useState([]);
  useEffect(()=>{
    const fetchAPI = async()=>{
      console.log(user)
      const  result = await listFollow.follow(user);
      setFollow(prev=>[...prev,...result]);
    }
    fetchAPI();
  },[user])
  
  const HandleGetUser = ()=>{
    setUser(user+1)
  }
            return <aside className={cx('wrapper')}>
            <Menu>
            <MenuItem title="Dành cho bạn" to={routeConfig.Home} icon={<HomeIcon/>}/>
            <MenuItem title="Đang follow" to={routeConfig.following} icon={<GroupIcon/>}/>
            <MenuItem title="Khám phá" to={routeConfig.nickname} icon={<TimerIcon/>}/>
            <MenuItem title="Live" to={routeConfig.following} icon={<LiveIcon/>}/>
        </Menu>
        <Follow>
        {userFollow.map((data) => (
              <ResultAccount index={data.id} prop={data} />
        )
        )}
        </Follow>
        <p onClick={HandleGetUser}>Xem thêm</p>
        </aside>
   
}
export default Sidebar;