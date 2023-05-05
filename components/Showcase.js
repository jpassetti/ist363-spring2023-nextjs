import { scroller } from 'react-scroll';

import Button from './Button';
import Container from './Container';
import Heading from './Heading';
import Image from 'next/image';

import styles from './showcase.module.scss';

const Showcase = ({ 
    backgroundImage,
    headline,
    subheadline
}) => {
    return <section className={styles.showcase}>
            {backgroundImage &&
                <div className={styles.showcase_image}>
                    <Image 
                        src={backgroundImage.sourceUrl}
                        alt={backgroundImage.altText}
                        width={backgroundImage.mediaDetails.width}
                        height={backgroundImage.mediaDetails.height}
                    />
                </div>
            }
            <Container>
                <div className={styles.showcase_text}>
                    <Heading level={3}>{subheadline}</Heading>
                    {headline && 
                        <Heading level={1}>{headline}</Heading>
                    }
                    <Button 
                        label="Learn more" 
                        type="primary" 
                        clickHandler={() => {
                            scroller.scrollTo("trimPicker", {
                                duration: 800,
                                delay: 0,
                                smooth: true
                            });
                        }}
                    />
                </div>
            </Container>
    </section>
}
export default Showcase;