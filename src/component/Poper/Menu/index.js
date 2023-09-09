import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless';
import ItemAccount from '~/component/AccountItem'
import Header from '../Header'; 
import { Wrapper as WrapperSearch } from '~/component/Poper'
import { faFire,faLanguage, faXmark,faUser,faHeart,faCoins,faGear,faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const cx = classNames.bind(styles);

const Options =[
    {icon:<FontAwesomeIcon icon={faUser}/>,text:'Xem hồ sơ'},
    {icon:<FontAwesomeIcon icon={faHeart}/>,text:'Yêu thích'},
    {icon:<FontAwesomeIcon icon={faCoins}/>,text:'Nhận xu'},
    {icon:<FontAwesomeIcon icon={faGear}/>,text:'Cài đặt'},
    {
    icon:<FontAwesomeIcon icon={faLanguage}/>
    ,text:'Tiếng việt',
    children:{
        data:[
            {
                code:'en',
                text:'english',
            },
            {
                code:'en',
                text:'tiếng việt',
            },
            {
                code:'en',
                text:'english',
            },
            {
                code:'en',
                text:'tiếng việt',
            },
            {
                code:'en',
                text:'english',
            },
            {
                code:'en',
                text:'tiếng việt',
            },
            {
                code:'en',
                text:'english',
            },
            {
                code:'en',
                text:'tiếng việt',
            },
            {
                code:'en',
                text:'english',
            },
            {
                code:'en',
                text:'tiếng việt',
            },
            {
                code:'en',
                text:'english',
            },
            {
                code:'en',
                text:'tiếng việt',
            },
            {
                code:'en',
                text:'english',
            },
            {
                code:'en',
                text:'tiếng việt',
            },
            {
                code:'en',
                text:'english',
            },
            {
                code:'en',
                text:'tiếng việt',
            },
            {
                code:'en',
                text:'english',
            },
            {
                code:'en',
                text:'tiếng việt',
            },
            {
                code:'en',
                text:'english',
            },
            {
                code:'en',
                text:'tiếng việt',
            },
        ]
    }
},
    {icon:<FontAwesomeIcon icon={faArrowRightToBracket} />,text:'Đăng xuất'},
   
]  

function Menu ({children,hideOnClick= false}){
    const [History,setHistory] = useState([{data:Options}]);
    const current = History[History.length-1];
    const renderItems= ()=>{
     return  current.data.map((Story,index)=>{
            return (
                <button key={index} className={cx('button')} onClick={()=>
                {
                    const isParent = !!Story.children
                    if(isParent){

                        setHistory(prev =>[...prev,Story.children] )

                    }
                }}
                >
                    <ItemAccount  them={Story}/>
                </button>
            )
    })
    }


    return(
            <Tippy
                    interactive
                    delay={[0,700]}
                    hideOnClick={hideOnClick}
                    placement='bottom-end'
                    render={attrs => (
                        <div className={cx('options-box')} tabIndex="-1" {...attrs}>
                                <WrapperSearch>
                                    <ul className={cx('wrapper-options')}>
                                      {History.length> 1&&<Header onBack={()=>{
                                        setHistory((prev=>prev.slice(0,prev.length-1)))
                                      }}/>}  
                                      <div className={cx('menu-body')}>
                                    {renderItems()}
                                      </div>
                                    </ul>
                                </WrapperSearch>
                        </div>
                    )}
                    onHide={()=>setHistory(prev=>prev.slice(0,1))}
            >
                   {children}
            </Tippy>
    )
}
export default Menu;