"use client";  // Ensure this is at the top to use client-side hooks

import React from 'react';
import { useRouter } from 'next/navigation';  // Import from next/navigation

const LoginWithGoogle = () => {
  const router = useRouter();  // Get the router from next/navigation

  // Function to handle Google login
  const handleGoogleLogin = async () => {
    try {
      // Send the API request to your backend
      window.location.href = 'http://127.0.0.1:5000/auth/login-google';

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Navigate to /dashboard after successful login
      router.push('/user-survey');  
    } catch (error) {
      console.error("Error during login:", error);
      router.push('/user-survey');  
    }

    router.push('/user-survey');  
  };

  return (
    <button
      type="button"
      className="tf-button style2 white-button"
      onClick={handleGoogleLogin}
    >
      Login with Google
    </button>
  );
};

export default LoginWithGoogle;
