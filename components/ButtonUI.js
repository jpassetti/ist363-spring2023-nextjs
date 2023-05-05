import classnames from 'classnames/bind';

import Icon from './Icon';

import styles from './buttonui.module.scss';

let cx = classnames.bind(styles);

const ButtonUI = ({icon, clickHandler}) => {
    let btnuiClasses = cx({
        btnui: true,
        [`icon-${icon}`] : icon
    });
    return <button 
        className={btnuiClasses}
        onClick={clickHandler}
    >
        <Icon icon={icon} />
    </button>
}
export default ButtonUI;