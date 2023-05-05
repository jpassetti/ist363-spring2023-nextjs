import classnames from 'classnames/bind';

import styles from './paragraph.module.scss';

let cx = classnames.bind(styles);

const Paragraph = ({
    children,
    color="black"
}) => {
    let paragraphClasses = cx({
        paragraph: true,
        [`color-${color}`] : color
    });

    return <p className={paragraphClasses}>
        {children}
    </p>
}
export default Paragraph;