import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import logoImage from '../assets/logo.png';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (formData.username.trim().length < 2) {
      newErrors.username = 'El nombre de usuario debe tener al menos 2 caracteres';
    }

    if (formData.password.trim().length < 2) {
      newErrors.password = 'La contraseña debe tener al menos 2 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const success = await login(formData.username, formData.password);
    
    if (success) {
      toast.success('¡Bienvenido! Redirigiendo a la aplicación principal...');
      // En la aplicación separada, podrías redirigir a la otra aplicación
      window.location.href = '/'; // O la URL de tu aplicación principal
    } else {
      toast.error('Credenciales inválidas');
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e3d8b5' }}>
      {/* Header */}
      <div className="w-full py-4" style={{ backgroundColor: '#48392e' }}>
        <div className="container mx-auto px-4">
          <img 
            src={logoImage} 
            alt="DOUBLE π Logo" 
            className="w-12 h-12 rounded-full mx-auto"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <img 
              src={logoImage} 
              alt="DOUBLE π Logo" 
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-[#48392e] mb-8">LOG IN</h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#48392e] text-sm font-medium mb-2">
                INTRODUCE TU NOMBRE O USER NAME
              </label>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full h-12 bg-[#c4a574] border-none rounded-full px-4 text-[#48392e] placeholder:text-[#48392e]/70"
                placeholder="DoubleΠ"
                style={{ backgroundColor: '#c4a574' }}
              />
              {errors.username && (
                <p className="text-red-600 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            <div>
              <label className="block text-[#48392e] text-sm font-medium mb-2">
                INTRODUCE TU CONTRASEÑA
              </label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full h-12 bg-[#c4a574] border-none rounded-full px-4 text-[#48392e] placeholder:text-[#48392e]/70"
                placeholder="••••••"
                style={{ backgroundColor: '#c4a574' }}
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="text-center">
              <Link 
                to="/forgot-password" 
                className="text-[#48392e] text-sm hover:underline"
              >
                RECUPERAR CONTRASEÑA
              </Link>
            </div>

            <div className="text-center">
              <Button
                type="submit"
                disabled={loading}
                className="w-32 h-10 bg-[#c4a574] hover:bg-[#b39660] text-[#48392e] font-medium rounded-full border-none"
                style={{ backgroundColor: '#c4a574' }}
              >
                {loading ? 'Cargando...' : 'Login'}
              </Button>
            </div>

            <div className="text-center space-y-4">
              <Button
                type="button"
                className="w-full h-12 bg-white hover:bg-gray-50 text-[#48392e] font-medium rounded-full border border-gray-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Ingresar con Google</span>
              </Button>
              
              <p className="text-[#48392e] text-sm">
                SI NO TIENES UNA CUENTA REGÍSTRATE
              </p>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-[#48392e] text-sm">REGÍSTRATE CON:</span>
                <Link 
                  to="/register"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                >
                  <span className="text-[#48392e] text-lg font-bold">M</span>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;