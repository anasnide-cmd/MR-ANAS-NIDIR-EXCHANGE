// src/User.jsx
import { useEffect, useState } from 'react';
import { auth } from './firebase';

function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.displayName}!</h2>
      <img src={user.photoURL} alt="Profile" />
      <p>Email: {user.email}</p>
      {/* Tambah maklumat lain jika perlu */}
    </div>
  );
}

export default User;
