import { Link } from 'react-router-dom';
import Button from '../Elements/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

function CardProduct(props) {
  const { children } = props;
  return (
    <div className="w-full max-w-sm bg-slate-800 rounded-lg shadow-2xl overflow-hidden flex flex-col justify-between">
      {children}
    </div>
  );
}

function Header(props) {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="Product"
        className="p-8 rounded-t-lg h-80 w-full object-cover object-top"
      />
    </Link>
  );
}

function Body(props) {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="" className="">
        <h5 className="text-2xl font-semibold text-white tracking-tight mb-2 ">
          {title.substring(0, 20)}...
        </h5>
        <p className="text-sm text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
}

function Footer(props) {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        $ {price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}
      </span>
      <Button classname="bg-blue-700" onClick={() => dispatch(addToCart({ id, qty: 1 }))}>
        Add to cart
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
