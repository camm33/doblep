import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import Header from '@/components/Header';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    birthDate: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const validateBasicForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Formato de correo electrónico inválido';
      }
    }

    // Validar username
    if (!formData.username.trim()) {
      newErrors.username = 'El nombre de usuario es requerido';
    } else if (formData.username.length < 3) {
      newErrors.username = 'El nombre de usuario debe tener al menos 3 caracteres';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = 'El nombre de usuario solo puede contener letras, números y guiones bajos';
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

  const validateFullForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Validar confirmación de contraseña
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirma tu contraseña';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    // Validar fecha de nacimiento
    if (!formData.birthDate) {
      newErrors.birthDate = 'La fecha de nacimiento es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!showAdditionalFields) {
      // Primera vez: validar campos básicos y mostrar campos adicionales
      if (!validateBasicForm()) {
        return;
      }
      setShowAdditionalFields(true);
      return;
    }

    // Segunda vez: validar todos los campos y registrar
    if (!validateFullForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const success = await register(formData.email, formData.username, formData.password);
      
      if (success) {
        toast.success('¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.');
        navigate('/login');
      } else {
        toast.error('El correo electrónico o nombre de usuario ya está en uso.');
      }
    } catch (error) {
      toast.error('Error al crear la cuenta. Inténtalo de nuevo.');
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
              <h1 className="text-3xl font-bold text-foreground mb-2">REGISTER</h1>
              <p className="text-base text-foreground mb-4">Crea una cuenta nueva</p>
              <p className="text-sm text-muted-foreground">
                ¿Ya te has registrado?{' '}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Ingresar
                </Link>
              </p>
            </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Email */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium">INTRODUCE TU NOMBRE</Label>
              <Input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Usuario123"
                className={`rounded-full h-12 px-6 ${errors.username ? 'border-destructive' : 'border-muted bg-muted/50'}`}
                autoComplete="username"
              />
              {errors.username && (
                <p className="text-sm text-destructive">{errors.username}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">INGRESA TU CORREO ELECTRÓNICO</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ejemplo@correo.com"
                className={`rounded-full h-12 px-6 ${errors.email ? 'border-destructive' : 'border-muted bg-muted/50'}`}
                autoComplete="email"
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
                autoComplete="new-password"
              />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password}</p>
              )}
            </div>

            {/* Campos adicionales que aparecen después del primer clic */}
            {showAdditionalFields && (
              <>
                {/* Campo Confirmar Contraseña */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">CONFIRMA TU CONTRASEÑA</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className={`rounded-full h-12 px-6 ${errors.confirmPassword ? 'border-destructive' : 'border-muted bg-muted/50'}`}
                    autoComplete="new-password"
                  />
                  {errors.confirmPassword && (
                    <p className="text-sm text-destructive">{errors.confirmPassword}</p>
                  )}
                </div>

                {/* Campo Fecha de Nacimiento */}
                <div className="space-y-2">
                  <Label htmlFor="birthDate" className="text-sm font-medium">INTRODUCE TU FECHA DE NACIMIENTO</Label>
                  <Input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className={`rounded-full h-12 px-6 ${errors.birthDate ? 'border-destructive' : 'border-muted bg-muted/50'}`}
                  />
                  {errors.birthDate && (
                    <p className="text-sm text-destructive">{errors.birthDate}</p>
                  )}
                </div>
              </>
            )}

            {/* Botón de Submit */}
            <Button 
              type="submit" 
              className="w-full rounded-full h-12 text-base font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Registrarse...' : 'Registrarse'}
            </Button>
          </form>

        </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;