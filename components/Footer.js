import Heading from './Heading';
import NavSocialMedia from './NavSocialMedia';
import Paragraph from './Paragraph';

import styles from './footer.module.scss';

const Footer = () => {
    return <footer className={styles.footer}>
        <Heading level={2}>Connect with us</Heading>
        <NavSocialMedia />
        <Paragraph>Copyright 2023 Subaru.</Paragraph>
    </footer>
}
export default Footer