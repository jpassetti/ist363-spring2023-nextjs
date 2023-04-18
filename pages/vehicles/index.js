import { getAllVehicles } from '../../lib/api';
import Layout from '../../components/Layout';
import Link from 'next/link'

export async function getStaticProps() {
    const vehiclesData = await getAllVehicles();
    return {
      props: {
        vehiclesData
      }, // will be passed to the page component as props
    }
  }

const VehiclesPage = ({vehiclesData}) => {
    return (
        <Layout vehicles={vehiclesData}>
        <h1>Vehicles</h1>
        {vehiclesData.map((vehicle, index) => {
          const {slug, title} = vehicle.node;
            return <div key={index}>
                <h2><Link href={`/vehicles/${slug}`}>{title}</Link></h2>
            </div>
        })}
        </Layout>
    )
}
export default VehiclesPage