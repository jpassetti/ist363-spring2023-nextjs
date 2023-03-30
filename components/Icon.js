import Image from 'next/image';

const Icon = ({ icon }) => {
    return <Image 
        src={`/icons/${icon}.svg`}
        alt={`${icon} icon`}
        width={20}
        height={20}
    />
}
export default Icon;