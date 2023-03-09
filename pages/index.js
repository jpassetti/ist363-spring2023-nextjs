import Button from '../components/Button';
import Header from '../components/Header';
import Image from 'next/image';
import Layout from '../components/Layout';

import { getAllVehicles } from '../lib/api';

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = getAllVehicles();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      data
    }
  }
}

const Homepage = ({data}) => {
  console.log({data});
  return <Layout>
    <h1>Homepage</h1>
    <Button 
      label="Register now" 
      type="primary" 
    />
    {data.map((car) => {
        const { model, slug } = car;
        return <article>
          <Image 
            src={`/vehicles/${slug}/medium.webp`}
            alt={`${model} car`}
            width={350}
            height={185}
          />
          <h2>{model}</h2>
        </article>
    })}
   
  </Layout>
}
export default Homepage