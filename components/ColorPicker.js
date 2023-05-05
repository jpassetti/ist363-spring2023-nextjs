import { motion, AnimatePresence } from "framer-motion";
import chroma from "chroma-js";
import classnames from 'classnames/bind';
import { useState } from 'react'; 
import Heading from './Heading';
import Image from 'next/image';
import styles from './colorpicker.module.scss';

let cx = classnames.bind(styles);

const ColorPicker = ({ vehicleColors }) => {
    const [activeColorIndex, setActiveColorIndex] = useState(0);
 
    return <section className={styles.colorpicker}>
        <AnimatePresence>
            <div className={styles.large_image_relative_parent}>
            <motion.div
                key={vehicleColors[activeColorIndex].image.sourceUrl}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className={styles.large_image_wrapper}
            >
                <Image 
                    src={vehicleColors[activeColorIndex].image.sourceUrl}
                    alt={vehicleColors[activeColorIndex].image.altText}
                    width={vehicleColors[activeColorIndex].image.mediaDetails.width}
                    height={vehicleColors[activeColorIndex].image.mediaDetails.height}
                    className={styles.large_image}
                />
            </motion.div>
            </div>
        </AnimatePresence>
        <div className={styles.swatches}>
            {vehicleColors.map((vehicleColor, index) => {
                const { swatch, image } = vehicleColor;
                return <Swatch 
                    key={`swatch-${index}`}
                    hexValue={swatch.swatchInformation.hexValue} 
                    isActive={index === activeColorIndex ? true : false}
                    clickHandler={() => {
                        setActiveColorIndex(index);
                    }}
                />
            })}
        </div>
        <Heading 
            level={3}
            textAlign="center"
        >
            {vehicleColors[activeColorIndex].swatch.name}
        </Heading>
    </section>
}
const Swatch = ({ 
    clickHandler, 
    hexValue,
    isActive
}) => {
    let swatchClasses = cx({
        swatch: true,
        active: isActive === true
    });
    let darkerColor = chroma(hexValue).darken().hex();
    //console.log({darkerColor});
    return <div 
    className={swatchClasses}
    style={{ background: `linear-gradient(${hexValue}, ${darkerColor})`}}
    onClick={clickHandler}
    ></div>
}
export default ColorPicker;