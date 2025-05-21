"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type User = {
  id: string;
  email: string;
  name: string;
  role: string;
} | null;

interface AuthContextType {
  user: User;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  // Mock authentication - in a real app, this would connect to your backend auth service
  useEffect(() => {
    // Simulate checking if the user is already authenticated
    const checkAuth = () => {
      try {
        // For demo purposes, we'll just set a mock user
        setUser({
          id: '1',
          email: 'alex.johnson@example.com',
          name: 'Alex Johnson',
          role: 'analyst',
        });
      } catch (error) {
        console.error('Authentication error:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, validate credentials against your auth service
    if (email && password) {
      setUser({
        id: '1',
        email,
        name: 'Alex Johnson',
        role: 'analyst',
      });
    } else {
      throw new Error('Invalid credentials');
    }
    
    setLoading(false);
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}