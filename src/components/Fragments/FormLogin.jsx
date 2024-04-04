import { useEffect, useRef, useState } from 'react';
import Button from '../Elements/Button';
import InputForm from '../Elements/Input';
import { login } from '../../services/auth.service';

function FormLogin() {
  const [loginFailed, setLoginFailed] = useState('');
  function handleLogin(e) {
    e.preventDefault();
    // localStorage.setItem('email', e.target.email.value);
    // localStorage.setItem('password', e.target.password.value);
    // window.location.href = '/products';

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem('token', res);
        window.location.href = '/products';
      } else {
        setLoginFailed(res.response.data);
      }
    });
  }

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        id="username"
        label="Username"
        type="text"
        name="username"
        placeholder="John Doe"
        ref={usernameRef}
      />
      <InputForm
        id="password"
        label="Password"
        type="password"
        name="password"
        placeholder="*****"
      />
      <Button type="submit" classname="bg-blue-500 w-full mt-2">
        Login
      </Button>
      {loginFailed && (
        <p className="text-red-500 text-sm font-semibold mt-4 text-center">*{loginFailed}</p>
      )}
    </form>
  );
}

export default FormLogin;
