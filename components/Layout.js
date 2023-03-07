import { Fragment } from 'react'

import Footer from './Footer';
import Header from './Header';
import Link from 'next/link';

const Layout = ({children}) => {
    return <Fragment>
        <Header />
        <nav>
            <ul>
                <li>
                    <Link href="/">
                    Home
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                    Products
                    </Link>
                </li>
            </ul>
        </nav>
        <main>
            {children}
        </main>
        <Footer />
    </Fragment>   
}
export default Layout