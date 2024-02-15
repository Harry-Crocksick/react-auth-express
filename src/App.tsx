import Login from './Login';
import useToken from './hooks/TokenHook';

export interface TokenProp {
  token: string;
}

export default function App() {
  const [token, setToken] = useToken();

  function handleLogout() {
    setToken({ token: '' });
  }

  if (!token) {
    return (
      <Login setToken={setToken} />
    );
  }

  return (
    <main className="min-h-screen grid place-content-center">
      <h1 className="text-5xl font-semibold text-cyan-500 mb-8">Hello, World!</h1>
      <button 
        type='button' 
        className='font-semibold text-white max-w-max px-4 py-1.5 mx-auto bg-blue-500 rounded-md hover:bg-blue-500/80 active:bg-blue-300'
        onClick={handleLogout}
      >
        Logout
      </button>
    </main>
  )
}
