import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

// components
import Heading from './Heading';
import Image from 'next/image';

const TrimPicker = ({ trimLevels }) => {
    // stateVariable, setterFunctionVariable
    const [activeIndex, setActiveIndex] = useState(0);

    return <div>

<AnimatePresence>
   <motion.div 
      key={trimLevels[activeIndex].images.large.sourceUrl}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
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
export default TrimPicker;