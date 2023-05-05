import ButtonUI from './ButtonUI';
import Link from 'next/link';

import styles from './navoverlay.module.scss';

import { getPages } from '../lib/api';

const NavOverlay = ({ closeHandler }) => {
    const pages = getPages();
    return <div className={styles.navoverlay}>
        <ButtonUI 
            icon="close"
            clickHandler={closeHandler}
        />
        <nav className={styles.navmobile}>
            <ul className={styles.navmobile_list}>
                {pages.map((page, index) => {
                    const { title, slug } = page;
                    return <li key={`navDesktop${index}`}>
                        {slug ? 
                            <Link href={`/${slug}`}>{title}</Link>
                        : title
                        }
                    </li>
                })}
            </ul>
        </nav>
    </div>
}
export default NavOverlay