# Double π - Aplicación de Autenticación

Esta es la aplicación separada que contiene únicamente el sistema de login y registro de Double π.

## Características

- ✅ Login con validación mínima (2 caracteres)
- ✅ Registro con 7 campos (nombre completo, username, email, contraseña, talla, fecha de nacimiento, foto)
- ✅ Botón de "Ingresar con Google" (diseño únicamente)
- ✅ Recuperación de contraseña
- ✅ Sin base de datos - solo frontend
- ✅ Diseño fiel a las especificaciones con colores #48392e y #e3d8b5

## Instalación y Uso

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en desarrollo:**
```bash
npm run dev
```

3. **Construir para producción:**
```bash
npm run build
```

## Rutas Disponibles

- `/` - Login (página principal)
- `/login` - Login
- `/register` - Registro
- `/forgot-password` - Recuperar contraseña

## Notas Importantes

- Esta aplicación NO guarda datos en ninguna base de datos
- Solo requiere mínimo 2 caracteres en cada campo para validar
- Al hacer login exitoso, redirige a la aplicación principal
- Está completamente separada de la aplicación principal de Double π
- Los archivos de esta carpeta son independientes y no afectan la aplicación principal

## Estructura del Proyecto

```
auth-app/
├── src/
│   ├── components/
│   │   ├── ui/           # Componentes UI de shadcn
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   └── ForgotPassword.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── assets/
│   │   └── logo.png
│   ├── lib/
│   │   └── utils.ts
│   ├── AuthApp.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```