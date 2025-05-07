// src/Login.jsx
import { useNavigate } from 'react-router-dom';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User info:", result.user);
      navigate('/user');  // Redirect ke halaman User.jsx selepas login berjaya
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
}

export default Login;
