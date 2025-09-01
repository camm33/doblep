# 🎨 GUÍA RÁPIDA PARA CAMBIAR COLORES

## ¿Cómo cambiar colores de forma súper fácil?

Ahora cada parte de tu aplicación tiene un **ID único** que puedes personalizar fácilmente editando el archivo:

📁 **`src/styles/custom-colors.css`**

## 🚀 Pasos simples:

1. **Abre el archivo:** `src/styles/custom-colors.css`
2. **Busca el ID** de la parte que quieres cambiar (ejemplo: `#hero-section`)
3. **Cambia el código de color** después de `background-color:` o `color:`
4. **Guarda el archivo** y recarga la página

## 🎯 Ejemplos rápidos:

### Para cambiar el color del hero principal:
```css
#hero-section {
  background: linear-gradient(135deg, #ff6b6b, #ee5a24) !important; /* Rojo/Naranja */
}
```

### Para cambiar el color del header:
```css
#app-header {
  background-color: #2c2c54 !important; /* Azul oscuro */
}
```

### Para cambiar el precio de los productos:
```css
.product-price {
  color: #ff6b6b !important; /* Rojo */
}
```

## 📋 Lista de IDs principales:

### HEADER (Barra superior)
- `#app-header` - Fondo del header
- `#app-logo-text` - Texto del logo
- `#sell-button` - Botón de vender
- `#cart-button` - Botón del carrito

### HERO (Sección principal)
- `#hero-section` - Fondo completo del hero
- `#hero-title` - Título principal
- `#hero-shop-button` - Botón de "Comprar Ahora"

### PRODUCTOS
- `.product-card` - Tarjetas de productos
- `.product-title` - Títulos de productos
- `.product-price` - Precios de productos

### FOOTER (Pie de página)
- `#app-footer` - Fondo del footer
- `#footer-brand-name` - Nombre de la marca

## 🎨 Códigos de colores populares:

- **Rojo:** `#ff6b6b`
- **Azul:** `#3742fa`
- **Verde:** `#2ed573`
- **Púrpura:** `#a55eea`
- **Naranja:** `#ffa726`
- **Rosa:** `#ff6b9d`
- **Amarillo:** `#feca57`

## ⚡ Tip importante:
Usa `!important` al final de cada línea para asegurar que el color se aplique correctamente.

---

¡Ahora puedes personalizar tu aplicación en segundos! 🎉