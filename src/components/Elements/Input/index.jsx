import { forwardRef } from 'react';
import Input from './Input';
import Label from './Label';

const InputForm = forwardRef((props, ref) => {
  const { label, type, name, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}:</Label>
      <Input id={name} type={type} name={name} placeholder={placeholder} ref={ref} />
    </div>
  );
});

InputForm.displayName = 'InputForm';

export default InputForm;
