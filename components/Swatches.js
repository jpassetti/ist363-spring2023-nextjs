import Swatch from './Swatch';
import styles from './swatches.module.scss';

const Swatches = ({colors}) => {
    return <ul className={styles.swatches}>
        {colors.map((color) => {
            return <Swatch color={color} />
        })}
    </ul>
}
export default Swatches;