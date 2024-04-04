import { forwardRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center relative">
      <input
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        ref={ref}
        className="w-full border rounded-lg px-3 py-2 text-slate-700 bg-slate-300 placeholder:opacity-80 outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
      />
      {type === 'password' && (
        <button
          type="button"
          className="absolute right-0 text-xl h-full px-4 text-gray-600"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
