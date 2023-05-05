import { motion, AnimatePresence } from "framer-motion"

import Heading from './Heading';
import Image from 'next/image';
import Link from 'next/link';
import Paragraph from './Paragraph';

import styles from './grid.module.scss';

import { convertPriceToFormattedString } from '../lib/utilities'; 

const Grid = ({ items, activeItem }) => {
    let sectionVariants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
    }
    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        show: { y: 0, opacity: 1 }
    }

    return <AnimatePresence>
        <motion.section 
        key={`gridSection${activeItem}}`}
        className={styles.grid}
        variants={sectionVariants}
        initial="hidden"
        animate="show"
        >
        {items.map((item, index) => {
            const { title, slug, vehicleInformation } = item.node;

            const formattedPrice = convertPriceToFormattedString(vehicleInformation.trimLevels[0].msrp);

            return <motion.article 
                key={`gridItem${slug}${index}`}
                className={styles.gridItem}
                variants={itemVariants} 
            >
                <Link href={`/vehicles/${slug}`}>
                    <Image 
                        src={vehicleInformation.trimLevels[0].images.large.sourceUrl}
                        alt={vehicleInformation.trimLevels[0].images.large.altText}
                        width={vehicleInformation.trimLevels[0].images.large.mediaDetails.width}
                        height={vehicleInformation.trimLevels[0].images.large.mediaDetails.height}
                        className={styles.gridItemImage}
                    />
                </Link>
                <Heading level={3}>
                    <Link href={`/vehicles/${slug}`}>
                    {title}
                    </Link>
                </Heading>
                <Paragraph>Starting at <strong>{formattedPrice}</strong></Paragraph>
            </motion.article>
        })}
    </motion.section>
    </AnimatePresence>
}
export default Grid;