import { useState,useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import * as LoginUser  from '~/apiServes/Login'
const cx = classNames.bind(styles);
function Login() {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
   const handleEmail = (e)=>{
    setEmail(e);
   }
   const handlePass= (e)=>{
    setPass(e);
   }
const HandleSubmit =()=>{
    const fetchAPI = async()=>{
        const fD= new FormData();
        fD.append("email",email);
        fD.append("password",pass);
        await  LoginUser.login(fD);
         setEmail('');
         setPass('');
    }
    fetchAPI();
}

    return (
        <div className={cx("layout")}>
            <div className={cx("box-login")}>
                <div className={cx("header-login")}>
            <h2>Đăng nhập</h2>
                </div>
                <div className={cx("email")}>
                    <label for="uname"><b>Email</b></label>
                    <input 
                    type="email"
                    onChange={(e)=>handleEmail(e.target.value)}  
                    value={email} 
                    placeholder="Email" 
                    name="uname" 
                    required />
                </div>
                <div className={cx("email")}>
                    <label for="uname"><b>Mật khẩu</b></label>
                    <input 
                    type="password" 
                    onChange={(e)=>handlePass(e.target.value)}  
                    value={pass} 
                    placeholder="Mật khẩu" 
                    name="uname" 
                    required 
                    />
                </div>
                <div className={cx('button')}>
                <button type="submit" onClick={HandleSubmit} >Login</button>
                </div>
            </div>
        </div>
    )
}
export default Login 