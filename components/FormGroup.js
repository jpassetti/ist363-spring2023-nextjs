import styles from './formgroup.module.scss';

const FormGroup = ({children}) => {
    return <div className={styles.formgroup}>{children}</div>
}
export default FormGroup;