import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<boolean>;
  register: (email: string, username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sin persistencia - siempre empezar sin usuario
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, rememberMe: boolean = false): Promise<boolean> => {
    setLoading(true);
    
    // Simulación de login simple - solo verificar que no esté vacío
    if (email.trim().length >= 2 && password.trim().length >= 2) {
      const userSession = {
        id: crypto.randomUUID(),
        email: email,
        username: email
      };
      
      setUser(userSession);
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const register = async (email: string, username: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    // Simulación de registro simple - solo verificar que no esté vacío
    if (email.trim().length >= 2 && username.trim().length >= 2 && password.trim().length >= 2) {
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};