import styles from './paragraph.module.scss';

const Paragraph = ({children}) => {
    return <p className={styles.paragraph}>
        {children}
    </p>
}
export default Paragraph;