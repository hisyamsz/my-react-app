import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../context/DarkMode';
import Button from '../Elements/Button';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function AuthLayouts(props) {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex justify-center bg-slate-300 min-h-screen items-center ${
        isDarkMode && 'bg-slate-900'
      }`}
    >
      <div className={`w-full max-w-md p-6 bg-slate-800 rounded-xl shadow-xl`}>
        <Button
          classname="bg-blue-600 absolute top-5 right-5 text-xl"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
        </Button>
        <h1 className="text-white mb-4 text-4xl font-bold">{title}</h1>
        <p className="text-white text-xl font-medium mb-8">Welcome to our website!</p>
        {children}
        <p className="text-white text-center font-semibold mt-4 text-sm">
          {type === 'login' ? "Don't have any account? " : 'Already have an account? '}
          {type === 'login' && (
            <Link to="/register" className="text-blue-500 font-bold hover:underline">
              Sign up for free
            </Link>
          )}
          {type === 'register' && (
            <Link to="/login" className="text-blue-500 font-bold hover:underline">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
}

export default AuthLayouts;
