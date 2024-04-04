function Label(props) {
  const { children, htmlFor } = props;
  return (
    <label htmlFor={htmlFor} className="block text-slate-200 font-bold mb-2 ">
      {children}
    </label>
  );
}

export default Label;
