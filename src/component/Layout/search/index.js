import { useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleXmark,faFire,faXmark,faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as WrapperSearch } from '~/component/Poper'

import * as searchServices from '~/apiServes/searchServices'
import classNames from 'classnames/bind';
import ResultAccount from '~/component/ResultSearch';
import styles from './search.module.scss'
import { SeachIcons } from '~/component/icons';
import { useDebounce } from '~/routes/hook';
import onClickOutside from "react-onclickoutside";
const cx = classNames.bind(styles);
  


function Search() {
    const [valueInput,SetValueInput] = useState('');
    const [inputSearch, setInput] = useState(false);
    const [resultSearch,setResultSearch] = useState([]);
    const [loading,setLoading] = useState(false);
    const inputRef =useRef()
    const debounce = useDebounce(valueInput,500)

    const HandleHelden=()=>{
        setInput(false)
    }
    const HandleInput = (e)=>{
        const  Value  = e.target.value;
        if(Value[0]===' '){
                 SetValueInput('')
            }else{
                    SetValueInput(e.target.value);
                }
    }
    useEffect(()=>{
        if(!debounce.trim()){
            setResultSearch([])
            return;
        }
        
        const fetchAPI = async()=>{
            setLoading(true);
            const result = await searchServices.search(debounce);
            console.log(result)
            setResultSearch(result)
            setLoading(false);
        }
                fetchAPI();
    },[debounce])
    

    return (<div className={cx('inner-header')}>
        <div className={cx('search-header')}>
            <form className={cx('input-form-header')}>
                <div className={cx('wrapper-search-header')}>
                <Tippy
                    interactive
                    visible={inputSearch}
                    placement='bottom-start'
                    render={attrs => (
                        <div className={cx('search-box')} tabIndex="-1" {...attrs}>
                            <WrapperSearch>
                                <div className={cx('wrapper-story-search')}>
                                    {resultSearch.map((data) => (
                                         <ResultAccount index={data.id} data={data} />
                                    )
                                    )}

                                </div>
                            </WrapperSearch>
                        </div>
                    )}
                    onClickOutside={HandleHelden}
                >
                    <input 
                    ref={inputRef}
                    value={valueInput}
                    onChange={HandleInput}
                    onClick={() => { setInput(true) }} 
                    placeholder='Tìm kiếm' 
                    className={cx('input-search-header')}>
                    </input>
                </Tippy>
                </div>
                 {!!valueInput&&!loading&&(
                <button className={cx('clear')} onClick={()=>{
                    SetValueInput('');
                    inputRef.current.focus();
                    }}>
                    <FontAwesomeIcon  icon={faCircleXmark} />
                </button>
                 )}
                 {loading&& <FontAwesomeIcon icon={faSpinner} className={cx('loading')}/>}
                <span className={cx('span-search')}></span>
                <Link to={'following'} className={cx('button-search-header')}>
                    <SeachIcons/>
                </Link>
                
            </form>

        </div>
    </div>
    )
}
export default Search