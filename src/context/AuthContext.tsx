import React, { useState, createContext, useContext } from 'react';
type User = {
  id: string;
  name: string;
  email: string;
};
type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  // Simulate authentication functions
  const login = async (email: string, password: string) => {
    // In a real app, this would call an API
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        setUser({
          id: '1',
          name: email.split('@')[0],
          email
        });
        resolve(true);
      }, 800);
    });
  };
  const signup = async (name: string, email: string, password: string) => {
    // In a real app, this would call an API
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        setUser({
          id: '1',
          name,
          email
        });
        resolve(true);
      }, 800);
    });
  };
  const logout = () => {
    setUser(null);
  };
  return <AuthContext.Provider value={{
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout
  }}>
      {children}
    </AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};