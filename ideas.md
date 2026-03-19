# Ideas de Diseño — Orion Racing

## Enfoque seleccionado: Dark Precision Engineering

**Movimiento de diseño:** Dark Precision Engineering — inspirado en la estética de escuderías de F1 élite (Red Bull Racing, Mercedes AMG), con influencias de marcas de tecnología aeroespacial y gaming de alto rendimiento.

**Principios fundamentales:**
- Fondo negro absoluto como lienzo principal — el silencio visual amplifica el impacto del contenido
- Morado como energía cinética — los tonos #451d6c → #c08af0 funcionan como gradientes de velocidad y glow
- Tipografía Exo 2 bold — geométrica, técnica, sin concesiones decorativas
- Asimetría controlada — layouts que rompen la simetría para comunicar dinamismo

**Filosofía de color:**
- Negro (#000000): fondo, silencio, poder
- #451d6c → #632e96 → #8243b9 → #ac6be8 → #c08af0: gradiente de energía, de profundidad a luminosidad
- Blanco (#ffffff): texto principal, contraste máximo
- Glow morado en bordes, líneas divisorias y efectos hover

**Paradigma de layout:**
- Hero a pantalla completa con overlay de gradiente diagonal
- Secciones con padding asimétrico (izquierda más generoso que derecha)
- Líneas decorativas horizontales de 1px con gradiente morado como separadores
- Cards con borde izquierdo de 2px en morado como acento

**Elementos distintivos:**
1. Línea de velocidad: borde inferior animado de izquierda a derecha en hover (color #ac6be8)
2. Glow halo: sombra exterior difusa morada en elementos activos/hover
3. Contador de logros: números grandes con tipografía bold y glow sutil

**Filosofía de interacción:**
- Hover states con transición de 0.3s ease-out
- Scroll reveal con translateY + opacity
- Navbar transparente → sólido con blur al hacer scroll

**Animaciones:**
- Fade in + translateY(20px → 0) en 0.6s para secciones
- Zoom lento (scale 1 → 1.05) en 7s loop para imágenes hero
- Línea inferior en hover: width 0 → 100% en 0.3s
- Número counter animado al entrar en viewport

**Sistema tipográfico:**
- Fuente: Exo 2 (Google Fonts)
- H1: 700 weight, 4-6rem, tracking-tight
- H2: 600 weight, 2.5-3rem
- Body: 400 weight, 1rem, line-height 1.7
- Accent/Label: 600 weight, 0.75rem, letter-spacing 0.15em, uppercase
