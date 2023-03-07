import Button from '../components/Button';
import Header from '../components/Header';
import Layout from '../components/Layout';

const Homepage = () => {
  return <Layout>
    <h1>Homepage</h1>
    <Button 
      label="Register now" 
      type="primary" 
    />
    <Button 
      label="Download now" 
      type="secondary"
    />
    <Button 
      label="Learn more" 
      type="primary"
    />
    <Button 
      label="Buy now" 
      type="secondary" 
    />
  </Layout>
}
export default Homepage