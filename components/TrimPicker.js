import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

// components
import FormGroup from './FormGroup';
import Heading from './Heading';
import Image from 'next/image';
import Label from './Label';
import Select from './Select';

import styles from './trimpicker.module.scss';

const backgroundImages = [
    {
        name: "Lakeside",
    },
    {
        name: "Lakeside City",
    },
    {
        name: "City Park",
    },
    {
        name: "Mountains",
    },
    {
        name: "Race track"
    },
    {
        name: "Mountain top"
    },
    {
        name: "City parking lot"
    },
    {
        name: "City street"
    },
    {
        name: "Parking Garage Top"
    }
];

const TrimPicker = ({ trimLevels }) => {
    const [activeTrimIndex, setActiveTrimIndex] = useState(0);
    const [activeBackgroundIndex, setActiveBackgroundIndex] = useState(0);

    return <section className={styles.trimpicker} id="trimPicker">
        <div className={styles.trimpicker_image}>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.trimpicker_background_wrapper}
            >
                <Image 
                    src={`/backgrounds/series-background-${parseInt(activeBackgroundIndex)+1}.jpg`}
                    alt={backgroundImages[activeBackgroundIndex].name}
                    width={1900}
                    height={656}
                    className={styles.trimpicker_image_background}
                />
            </motion.div>
            <motion.div
                 key={trimLevels[activeTrimIndex].images.large.sourceUrl}
                 initial={{ x: 50, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 exit={{ x: -50, opacity: 0 }}
                 className={styles.trimpicker_image_wrapper}
            >
                <Image 
                    src={trimLevels[activeTrimIndex].images.large.sourceUrl}
                    alt={trimLevels[activeTrimIndex].images.large.altText}
                    width={trimLevels[activeTrimIndex].images.large.mediaDetails.width}
                    height={trimLevels[activeTrimIndex].images.large.mediaDetails.height}
                    className={styles.trimpicker_image_large}
                />
            </motion.div>
        </div>
        <div className={styles.trimpicker_text}>
            <Heading level={2}>Picture Yourself Behind the Wheel</Heading>
            <FormGroup>
                <Label>I want to drive a...</Label>
                <Select 
                    options={trimLevels.map((trimLevel, index) => {
                        return {
                            value: index,
                            label: trimLevel.name
                        }
                    })} 
                    changeHandler={setActiveTrimIndex}
                />
            </FormGroup>
            <FormGroup>
                <Label>Change the driving location to...</Label>
                <Select 
                    options={backgroundImages.map((backgroundImage, index) => {
                        return {
                            value: index,
                            label: backgroundImage.name
                        }
                    })} 
                    changeHandler={setActiveBackgroundIndex}
                />
            </FormGroup>
        </div>
    </section>
}


/*const TrimPicker = ({ trimLevels }) => {
    // stateVariable, setterFunctionVariable
    const [activeIndex, setActiveIndex] = useState(0);

    return <div>
<AnimatePresence>
   <motion.div 
      key={trimLevels[activeIndex].images.large.sourceUrl}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      id="trimPicker"
   >
        <Image 
            src={trimLevels[activeIndex].images.large.sourceUrl}
            alt={trimLevels[activeIndex].images.large.altText}
            width={trimLevels[activeIndex].images.large.mediaDetails.width}
            height={trimLevels[activeIndex].images.large.mediaDetails.height}
        />
        <Heading level={2}>{trimLevels[activeIndex].name}</Heading>
        </motion.div>
</AnimatePresence>
        <ul>
        {trimLevels.map((trimLevel, index) => {
            const { name, images } = trimLevel;
            const { thumbnail } = images;
            return <li onClick={() => {
                setActiveIndex(index);
            }}>
                <Heading level={3}>{name}</Heading>
                {thumbnail && 
                    <Image 
                        src={thumbnail.sourceUrl}
                        alt={thumbnail.altText}
                        width={thumbnail.mediaDetails.width}
                        height={thumbnail.mediaDetails.height}
                    />
                }
            </li>
        })}
        </ul>

    </div>
}
*/
export default TrimPicker;