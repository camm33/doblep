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
    // Verificar si hay una sesión guardada al cargar la página
    const savedUser = localStorage.getItem('authUser') || sessionStorage.getItem('authUser');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error al cargar usuario guardado:', error);
        localStorage.removeItem('authUser');
        sessionStorage.removeItem('authUser');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, rememberMe: boolean = false): Promise<boolean> => {
    setLoading(true);
    
    try {
      // Obtener usuarios registrados
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      
      // Buscar usuario por email o username
      const foundUser = registeredUsers.find((u: any) => 
        (u.email === email || u.username === email) && u.password === password
      );

      if (foundUser) {
        const userSession = {
          id: foundUser.id,
          email: foundUser.email,
          username: foundUser.username
        };
        
        setUser(userSession);
        
        // Guardar sesión según la preferencia del usuario
        if (rememberMe) {
          localStorage.setItem('authUser', JSON.stringify(userSession));
        } else {
          sessionStorage.setItem('authUser', JSON.stringify(userSession));
        }
        
        setLoading(false);
        return true;
      }
      
      setLoading(false);
      return false;
    } catch (error) {
      console.error('Error en login:', error);
      setLoading(false);
      return false;
    }
  };

  const register = async (email: string, username: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    try {
      // Obtener usuarios existentes
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      
      // Verificar si el email o username ya existe
      const userExists = existingUsers.some((u: any) => 
        u.email === email || u.username === username
      );
      
      if (userExists) {
        setLoading(false);
        return false;
      }
      
      // Crear nuevo usuario
      const newUser = {
        id: crypto.randomUUID(),
        email,
        username,
        password,
        createdAt: new Date().toISOString()
      };
      
      // Guardar en la lista de usuarios registrados
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
      
      setLoading(false);
      return true;
    } catch (error) {
      console.error('Error en registro:', error);
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
    sessionStorage.removeItem('authUser');
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