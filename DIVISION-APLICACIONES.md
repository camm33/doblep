# División de Aplicaciones Double π

## 📁 Aplicación Principal (Carpeta raíz)
**Ubicación:** `/` (carpeta principal del proyecto)
**Funcionalidad:** Tienda de moda completa con catálogo de productos

### Características:
- ✅ Página de inicio con hero section
- ✅ Catálogo de productos (Shop)
- ✅ Detalles de productos
- ✅ Sistema de favoritos con corazones rojos
- ✅ Header con botones "Vender Artículo" e "Intercambiar Artículos"
- ✅ Footer con información de la empresa
- ✅ Diseño responsivo y moderno

### Para ejecutar:
```bash
npm run dev
```

## 📁 Aplicación de Autenticación (Carpeta auth-app)
**Ubicación:** `/auth-app/`
**Funcionalidad:** Sistema de login y registro independiente

### Características:
- ✅ Login con botón de Google
- ✅ Registro con 7 campos
- ✅ Recuperación de contraseña
- ✅ Sin base de datos (solo frontend)
- ✅ Validación mínima (2 caracteres)
- ✅ Diseño con colores específicos (#48392e, #e3d8b5)

### Para ejecutar:
```bash
cd auth-app
npm install
npm run dev
```

## 🔄 Diferencias Principales

| Aspecto | Aplicación Principal | Aplicación Auth |
|---------|---------------------|-----------------|
| **Propósito** | Tienda completa | Solo autenticación |
| **Rutas** | /, /shop, /product/:id | /, /login, /register |
| **Dependencias** | Compartidas pero independientes | Copia completa |
| **Datos** | No persiste datos de auth | No persiste datos |
| **Ejecución** | Puerto por defecto de Vite | Puerto diferente |

## 📝 Notas Importantes

1. **Independencia Total:** Ambas aplicaciones son completamente independientes
2. **No Interferencia:** Los cambios en una no afectan la otra
3. **Entrega por Partes:** Puedes entregar la aplicación auth por separado
4. **Mismo Diseño:** Ambas mantienen la identidad visual de Double π
5. **Sin Base de Datos:** Ninguna de las dos persiste datos reales

## 🚀 Comandos Rápidos

**Aplicación Principal:**
```bash
# En la carpeta raíz
npm run dev
```

**Aplicación Auth:**
```bash
# En la carpeta auth-app
cd auth-app
npm install
npm run dev
```