// core
import { Fragment } from 'react'

// custom components
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {
    return <Fragment>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </Fragment>   
}
export default Layout