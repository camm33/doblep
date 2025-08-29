import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';
import logoImage from '../assets/logo.png';

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const { register, loading } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    size: '',
    birthDate: '',
    photo: null as File | null,
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      photo: file
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'El nombre debe tener al menos 2 caracteres';
    }

    if (formData.username.trim().length < 2) {
      newErrors.username = 'El nombre de usuario debe tener al menos 2 caracteres';
    }

    if (formData.email.trim().length < 2) {
      newErrors.email = 'El email debe tener al menos 2 caracteres';
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

    const success = await register(formData.email, formData.username, formData.password);
    
    if (success) {
      toast.success('¡Registro exitoso! Ahora puedes iniciar sesión');
      navigate('/login');
    } else {
      toast.error('Error en el registro');
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
      <div className="flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#48392e] mb-2">REGISTER</h1>
            <div className="space-y-1">
              <p className="text-[#48392e] text-lg">Crea una cuenta nueva</p>
              <p className="text-[#48392e] text-sm">
                ¿Ya te has registrado?{' '}
                <Link to="/login" className="underline hover:no-underline">
                  INGRESAR
                </Link>
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <label className="block text-[#48392e] text-sm font-medium mb-2">
                    NOMBRE COMPLETO
                  </label>
                  <Input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full h-12 bg-[#c4a574] border-none rounded-full px-4 text-[#48392e] placeholder:text-[#48392e]/70"
                    placeholder="Nombre"
                    style={{ backgroundColor: '#c4a574' }}
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[#48392e] text-sm font-medium mb-2">
                    USERNAME
                  </label>
                  <Input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full h-12 bg-[#c4a574] border-none rounded-full px-4 text-[#48392e] placeholder:text-[#48392e]/70"
                    placeholder="Username"
                    style={{ backgroundColor: '#c4a574' }}
                  />
                  {errors.username && (
                    <p className="text-red-600 text-sm mt-1">{errors.username}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[#48392e] text-sm font-medium mb-2">
                    CORREO ELECTRÓNICO
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-12 bg-[#c4a574] border-none rounded-full px-4 text-[#48392e] placeholder:text-[#48392e]/70"
                    placeholder="ejemplo@gmail.com"
                    style={{ backgroundColor: '#c4a574' }}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[#48392e] text-sm font-medium mb-2">
                    CONTRASEÑA
                  </label>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full h-12 bg-[#c4a574] border-none rounded-full px-4 text-[#48392e] placeholder:text-[#48392e]/70"
                    placeholder="Contraseña"
                    style={{ backgroundColor: '#c4a574' }}
                  />
                  {errors.password && (
                    <p className="text-red-600 text-sm mt-1">{errors.password}</p>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <label className="block text-[#48392e] text-sm font-medium mb-2">
                    TALLA
                  </label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="w-full h-12 bg-[#c4a574] border-none rounded-full px-4 text-[#48392e]"
                    style={{ backgroundColor: '#c4a574' }}
                  >
                    <option value="">Selecciona tu talla</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#48392e] text-sm font-medium mb-2">
                    FECHA DE NACIMIENTO
                  </label>
                  <Input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="w-full h-12 bg-[#c4a574] border-none rounded-full px-4 text-[#48392e]"
                    style={{ backgroundColor: '#c4a574' }}
                  />
                </div>

                <div>
                  <label className="block text-[#48392e] text-sm font-medium mb-2">
                    FOTO
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="photo"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="w-full h-12 bg-[#c4a574] border-none rounded-full px-4 text-[#48392e] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#48392e] file:text-white hover:file:bg-[#3a2d24]"
                      style={{ backgroundColor: '#c4a574' }}
                    />
                    {!formData.photo && (
                      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#48392e]/70 text-sm pointer-events-none">
                        Elegir archivo | No se eligió ningún archivo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8">
              <Button
                type="submit"
                disabled={loading}
                className="w-40 h-12 bg-[#c4a574] hover:bg-[#b39660] text-[#48392e] font-medium rounded-full border-none"
                style={{ backgroundColor: '#c4a574' }}
              >
                {loading ? 'Cargando...' : 'Registrarse'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;