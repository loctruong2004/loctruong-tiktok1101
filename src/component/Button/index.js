import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({to,href,outLine,minWidth=96,primary,children,onClick,...passProp}){
    let Comp ='button';
    const props= {
        onClick,
        ...passProp,
    }
    if(to){
      Comp='Link';
      props.to=to;
    }else if(href){
        Comp ='a';
        props.href=href;
    }
    const classes =cx('button',{
        primary,
        outLine,
    })
    return (
        <Comp className={classes} {...props} width={minWidth}>
            <span>{children}</span>
        </Comp>
    )
}
export default Button