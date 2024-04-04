import { useLogin } from '../hooks/useLogin';

function ProfilePage() {
  const username = useLogin();
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold text-center">Profile</h1>
      <p>Username: {username}</p>
    </div>
  );
}

export default ProfilePage;
