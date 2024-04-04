import { useContext, useEffect, useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import Button from '../Elements/Button';
import { useSelector } from 'react-redux';
import { DarkMode } from '../../context/DarkMode';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTotalPrice } from '../../hooks/useTotalPrice';

function Navbar() {
  const [totalCart, setTotalCart] = useState(0);
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  function handleLogout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  return (
    <nav className="flex h-20 justify-end bg-blue-700 text-white items-center px-10">
      <span className="text-lg">{username}</span>
      <Button onClick={handleLogout} classname="ml-5 bg-black">
        Logout
      </Button>
      <div className="flex items-center bg-red-600 font-semibold text-sm px-3 py-2 rounded-full ml-5">
        Items: {totalCart} | Price: $ {total}
      </div>
      <Button classname="bg-black text-xl ml-5" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
      </Button>
    </nav>
  );
}

export default Navbar;
