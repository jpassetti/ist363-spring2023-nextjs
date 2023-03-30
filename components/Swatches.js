import classnames from 'classnames/bind';
import Icon from './Icon';
import styles from './swatches.module.scss';

const cx = classnames.bind(styles);

const Swatches = ({ colors, clickHandler, activeColor }) => {
    return <ul className={styles.swatches}>
        {colors.map((color) => {
             const { hex } = color;
             let swatchClasses = cx({
                swatch: true,
                active: color.slug === activeColor.slug
             });
             return <li 
                 className={swatchClasses}
                 onClick={() => {
                    clickHandler(color);
                 }}
                 style={{
                     backgroundColor: hex
                 }}
             >
                {color.slug === activeColor.slug &&
                    <Icon icon="check" />
                }
             </li>
        })}
    </ul>
}
export default Swatches;