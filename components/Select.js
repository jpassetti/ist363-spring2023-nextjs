import styles from './select.module.scss';

const Select = ({ 
    changeHandler, 
    options 
}) => {
    return <select 
        onChange={(event) => {
            event.preventDefault();
            changeHandler(event.target.value);
        }} 
        className={styles.select}
    >
       {options.map((option, index) => {
            const { value, label } = option;
            return <option key={`option${index}`} value={value}>
                {label}
            </option>
       })}
    </select>
}
export default Select;