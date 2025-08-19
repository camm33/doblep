import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error('Por favor ingresa tu correo electrónico');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Por favor ingresa un correo electrónico válido');
      return;
    }

    setIsSubmitting(true);
    
    // Simular envío de email (en un caso real aquí iría la lógica de recuperación)
    setTimeout(() => {
      setEmailSent(true);
      setIsSubmitting(false);
      toast.success('Si el correo está registrado, recibirás un enlace de recuperación');
    }, 2000);
  };

  if (emailSent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-lg shadow-lg p-8 border border-border text-center">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Email Enviado</h1>
            <p className="text-muted-foreground mb-6">
              Si el correo electrónico está registrado en nuestro sistema, recibirás un enlace para restablecer tu contraseña.
            </p>
            <div className="space-y-4">
              <Button asChild className="w-full">
                <Link to="/login">Volver al inicio de sesión</Link>
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setEmailSent(false);
                  setEmail('');
                }}
                className="w-full"
              >
                Enviar a otro correo
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">¿Olvidaste tu contraseña?</h1>
            <p className="text-muted-foreground">
              Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ejemplo@correo.com"
                autoComplete="email"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar enlace de recuperación'}
            </Button>
          </form>

          {/* Enlaces de navegación */}
          <div className="mt-6 text-center space-y-4">
            <Link to="/login" className="text-sm text-primary hover:underline block">
              ← Volver al inicio de sesión
            </Link>
            <div className="text-sm text-muted-foreground">
              ¿No tienes cuenta?{' '}
              <Link to="/register" className="text-primary hover:underline">
                Regístrate aquí
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;