import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import logoImage from '@/assets/logo.png';

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
    // Limpiar error del campo cuando el usuario empiece a escribir
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
      toast.success('¡Bienvenido!');
      navigate('/');
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

            <div className="text-center space-y-2">
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