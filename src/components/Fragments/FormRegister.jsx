import Button from '../Elements/Button';
import InputForm from '../Elements/Input';

function FormRegister() {
  return (
    <form action="">
      <InputForm
        id="fullname"
        label="Fullname"
        type="text"
        name="fullname"
        placeholder="Insert your name here.."
      />
      <InputForm
        id="email"
        label="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
      />
      <InputForm
        id="password"
        label="Password"
        type="password"
        name="password"
        placeholder="*****"
      />
      <InputForm
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="*****"
      />
      <Button classname="bg-blue-500 w-full mt-2">Register</Button>
    </form>
  );
}

export default FormRegister;
