import { Link, useParams } from 'react-router-dom'
import products from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => {
    return product.id === productId;
  })

  return (
    <section className='section product'>
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <Link to='/products'>Back to products</Link>
    </section>
  );
};

export default SingleProduct;
