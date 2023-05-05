import Link from 'next/link';

import { getPages } from '../lib/api';

import styles from './navdesktop.module.scss';

const NavDesktop = () => {
    const pages = getPages();
    return <nav className={styles.navdesktop}>
        <ul className={styles.navdesktop_list}>
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
}
export default NavDesktop;