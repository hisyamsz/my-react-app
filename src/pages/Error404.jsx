import { useRouteError } from 'react-router-dom';

function Error404() {
  const error = useRouteError();
  return (
    <div className="flex justify-center bg-gray-700 min-h-screen items-center flex-col text-white">
      <h1 className="text-5xl font-bold">Oops!</h1>
      <p className="text-xl font-semibold my-5">Sorry, an unexpected error has occured</p>
      <p className="text-lg font-medium">
        - {error.statusText} {error.message} -
      </p>
    </div>
  );
}

export default Error404;
