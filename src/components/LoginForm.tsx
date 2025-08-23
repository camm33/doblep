import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import Header from '@/components/Header';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Validar email/username
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico o nombre de usuario es requerido';
    } else if (formData.email.includes('@')) {
      // Si contiene @, validar como email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Formato de correo electrónico inválido';
      }
    }

    // Validar contraseña
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const success = await login(formData.email, formData.password, formData.rememberMe);
      
      if (success) {
        toast.success('¡Inicio de sesión exitoso!');
        navigate('/');
      } else {
        toast.error('Credenciales incorrectas. Verifica tu email/usuario y contraseña.');
      }
    } catch (error) {
      toast.error('Error al iniciar sesión. Inténtalo de nuevo.');
    }
    
    setIsSubmitting(false);
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-background">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-secondary flex items-center justify-center">
            <span className="text-secondary-foreground font-bold text-sm">P</span>
          </div>
          <span className="font-bold text-xl text-secondary">Pipi</span>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border/50 backdrop-blur-sm">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">LOGIN</h1>
              <p className="text-muted-foreground">Ingresa a tu cuenta</p>
              <p className="text-sm text-muted-foreground mt-2">
                ¿No tienes cuenta?{' '}
                <Link to="/register" className="text-primary hover:underline font-medium">
                  Regístrate
                </Link>
              </p>
            </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Email/Usuario */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">INGRESA TU CORREO ELECTRÓNICO</Label>
              <Input
                id="email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ejemplo@correo.com"
                className={`rounded-full h-12 px-6 ${errors.email ? 'border-destructive' : 'border-muted bg-muted/50'}`}
                autoComplete="username"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            {/* Campo Contraseña */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium">INTRODUCE TU CONTRASEÑA</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className={`rounded-full h-12 px-6 ${errors.password ? 'border-destructive' : 'border-muted bg-muted/50'}`}
                autoComplete="current-password"
              />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password}</p>
              )}
            </div>

            {/* Recordarme */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, rememberMe: !!checked }))
                }
              />
              <Label htmlFor="rememberMe" className="text-sm">
                Recordarme en este dispositivo
              </Label>
            </div>

            {/* Botón de Submit */}
            <Button 
              type="submit" 
              className="w-full rounded-full h-12 text-base font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Iniciando sesión...' : 'Iniciar'}
            </Button>
          </form>

          {/* Enlaces adicionales */}
          <div className="mt-6 text-center">
            <Link 
              to="/forgot-password" 
              className="text-sm text-primary hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;