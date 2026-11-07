import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut as fbSignOut } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { auth } from '../lib/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAtuEmail: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAtuEmail: false,
  signOut: async () => {},
});

// Approved ATU email domain patterns (handling legacy Sligo and merged campus variants)
const ATU_EMAIL_PATTERNS = [
  /@atu\.ie$/i,
  /@mail\.atu\.ie$/i,
  /@student\.atu\.ie$/i,
  /@mail\.itsligo\.ie$/i,
  /@itsligo\.ie$/i,
];

export const checkIsAtuEmail = (email: string | null | undefined): boolean => {
  if (!email) return false;
  return ATU_EMAIL_PATTERNS.some((pattern) => pattern.test(email.trim()));
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen to Firebase auth changes (sign in, sign out, page refresh)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    await fbSignOut(auth);
  };

  const isAtuEmail = checkIsAtuEmail(user?.email);

  return (
    <AuthContext.Provider value={{ user, loading, isAtuEmail, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to quickly access authentication state in any component
export const useAuth = () => useContext(AuthContext);