import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './image.module.scss';
import images from '~/acess/images';
const cx= classNames.bind(styles);
const  Profile=forwardRef(({alt,w=32,h=32,src,...prop},ref)=>{
    const [_fallback,setFallback] = useState('');
    const HandleError = ()=>{
        setFallback(images.noImage);
    }
    return <div className={cx('wrapper')}>
        <img 
        className={cx('image-profile')}
        ref={ref}
        src={_fallback||src}
        alt={alt}
        {...prop}
        onError={HandleError}
        width={w}
        height={h}
        />
           </div>
})
export default Profile