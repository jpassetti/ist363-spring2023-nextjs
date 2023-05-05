import styles from './buttongroup.module.scss';

const ButtonGroup = ({ children }) => {
    return <div className={styles.buttongroup}>{children}</div>
}
export default ButtonGroup;