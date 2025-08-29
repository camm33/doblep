import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import logoImage from '../assets/logo.png';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email.trim().length < 2) {
      toast.error('Por favor ingresa un email válido');
      return;
    }

    setLoading(true);
    
    // Simulación de envío de email de recuperación
    setTimeout(() => {
      toast.success('Se ha enviado un email de recuperación');
      setLoading(false);
    }, 1000);
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
          <div className="text-center mb-8">
            <img 
              src={logoImage} 
              alt="DOUBLE π Logo" 
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-[#48392e] mb-4">RECUPERAR CONTRASEÑA</h1>
            <p className="text-[#48392e] text-sm">
              Ingresa tu email para recibir instrucciones de recuperación
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#48392e] text-sm font-medium mb-2">
                CORREO ELECTRÓNICO
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 bg-[#c4a574] border-none rounded-full px-4 text-[#48392e] placeholder:text-[#48392e]/70"
                placeholder="ejemplo@gmail.com"
                style={{ backgroundColor: '#c4a574' }}
              />
            </div>

            <div className="text-center space-y-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-40 h-10 bg-[#c4a574] hover:bg-[#b39660] text-[#48392e] font-medium rounded-full border-none"
                style={{ backgroundColor: '#c4a574' }}
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </Button>
              
              <p className="text-[#48392e] text-sm">
                <Link to="/login" className="hover:underline">
                  Volver al login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;