# Dashboard Kanban + Catálogo E-commerce



## 🚀 Características

### Dashboard Kanban
- **3 columnas**: Por Hacer, En Progreso, Completado
- **Drag & Drop**: Mover tareas entre columnas
- **Edición inline**: Editar tareas directamente en las tarjetas
- **Prioridades**: Alta, Media, Baja con indicadores visuales
- **Filtros**: Por estado y prioridad
- **Modo oscuro/claro**: Toggle de tema persistente

### Catálogo E-commerce
- **Grid responsivo**: 4/2/1 columnas según breakpoint
- **Product Cards**: Con imágenes lazy loading y skeleton
- **Filtros avanzados**: Por categoría, precio, rating
- **Búsqueda**: Con debounce de 300ms
- **Formato de precios**: Localización con Intl.NumberFormat
- **Rating visual**: Con estrellas y puntuación
- **Descuentos**: Badges de porcentaje de descuento

## 🛠️ Tecnologías

- **React 18+** con TypeScript 5+
- **Vite** para build y desarrollo
- **React Router** para navegación
- **CSS Variables** para theming
- **Testing Library** para tests
- **Vitest** para testing
- **ESLint** para linting

## 📦 Instalación

```bash
# Instalar dependencias
yarn install

# Ejecutar en desarrollo
yarn dev

# Build para producción
yarn build

# Ejecutar tests
yarn test

# Ejecutar tests con cobertura
yarn test:coverage
```

## 🏗️ Arquitectura

```
src/
├── components/          # Componentes reutilizables
│   ├── Layout.tsx      # Layout principal con navegación
│   ├── ThemeToggle.tsx # Toggle de tema claro/oscuro
│   ├── ProductCard.tsx # Tarjeta de producto
│   ├── ProductFilters.tsx # Filtros del catálogo
│   ├── KanbanColumn.tsx # Columna del tablero Kanban
│   ├── TaskCard.tsx    # Tarjeta de tarea
│   └── TaskForm.tsx    # Formulario de nueva tarea
├── pages/              # Páginas principales
│   ├── Kanban.tsx      # Dashboard Kanban
│   └── Products.tsx    # Catálogo de productos
├── hooks/              # Custom hooks
│   └── useTheme.tsx    # Hook para gestión de tema
├── services/           # Servicios de API
│   └── productService.ts # Servicio de productos
├── types/              # Tipos TypeScript
│   └── index.ts        # Interfaces principales
├── styles/             # Estilos globales
│   └── index.css       # CSS con variables de tema
└── tests/              # Configuración de tests
    └── setup.ts        # Setup de testing
```

## 🎨 Diseño y UX

- **Identidad visual propia**: Paleta de colores personalizada
- **Responsive design**: Mobile-first con breakpoints optimizados
- **Accesibilidad**: WCAG 2.1 AA, ARIA labels, keyboard navigation
- **Performance**: Lazy loading, code splitting, optimizaciones
- **Iconografía**: SVG icons integrados (🌞/🌚, 🛒, ⭐)

## 🔧 Configuración

### Variables de entorno
```env
VITE_API_URL=https://dummyjson.com/products
```

### Scripts disponibles
- `yarn dev` - Servidor de desarrollo
- `yarn build` - Build de producción
- `yarn preview` - Preview del build
- `yarn test` - Ejecutar tests
- `yarn lint` - Linting del código
- `yarn type-check` - Verificación de tipos

## 📱 Responsive Breakpoints

- **Mobile**: ≤ 767px (1 columna)
- **Tablet**: 768px - 1279px (2 columnas)
- **Desktop**: ≥ 1280px (4 columnas)

## 🧪 Testing

Cobertura de tests ≥ 80% en componentes críticos:
- ProductCard
- KanbanColumn
- TaskCard
- ThemeToggle


## 🎯 Desafío Técnico - Frontend Senior

### 📋 **Objetivo del Desafío**

El candidato debe demostrar:

1. **Elección inteligente de tecnologías** y librerías
2. **Ojo de diseño** y capacidad de crear interfaces profesionales
3. **Arquitectura sólida** y patrones de desarrollo avanzados
4. **Optimización de performance** y experiencia de usuario

### 🚀 **El Reto: Transformar este MVP en una Aplicación moderna , estetica y funcional**

#### **Estado Actual del Proyecto**
- ✅ Estructura base con React 18 + TypeScript
- ✅ Tipos definidos para Task y Product
- ✅ Componentes básicos sin estilos
- ❌ **Sin funcionalidad de drag & drop** en Kanban
- ❌ **Sin estilos ni diseño visual**
- ❌ **Sin animaciones ni micro-interacciones**
- ❌ **Sin paginación**

#### **Lo que Debes Implementar**

### 🎨 **1. Sistema de Diseño y Estilos**

**Elige y justifica tu stack de diseño:**
```bash
# Opciones recomendadas (elige la que mejor se adapte):
# Opción A: Tailwind CSS + Headless UI
yarn add tailwindcss @headlessui/react @heroicons/react

# Opción B: Styled Components + Framer Motion
yarn add styled-components framer-motion

# Opción C: Bootstrap 5 + React Bootstrap
yarn add bootstrap react-bootstrap

```

**Criterios de evaluación:**
- ✅ **Consistencia visual**: Sistema de colores, tipografía, espaciado
- ✅ **Responsive design**: Mobile-first con breakpoints optimizados
- ✅ **Dark/Light mode**: Implementación elegante del toggle existente
- ✅ **BONUS**: Agregados que consideres.

### 🎯 **2. Funcionalidad Drag & Drop para Kanban**

**Implementa drag & drop profesional:**
```bash
# Opciones (elige la más apropiada):
# Opción A: @dnd-kit (moderno, accesible)
yarn add @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities

# Opción B: react-beautiful-dnd (establecido)
yarn add react-beautiful-dnd @types/react-beautiful-dnd

# Opción C: SortableJS (ligero)
yarn add sortablejs @types/sortablejs
```

**Características requeridas:**
- ✅ **Drag & drop fluido** entre columnas
- ✅ **Animaciones suaves** durante el movimiento
- ✅ **Feedback visual** (hover, dragging states)
- ✅ **Accesibilidad** (keyboard navigation)
- ✅ **Persistencia** del estado

### 🛍️ **3. Mejoras del Catálogo E-commerce**

**Optimiza la experiencia de compra:**
```bash
# Librerías recomendadas:
yarn add react-virtualized # Para listas grandes
yarn add react-intersection-observer # Lazy loading
yarn add react-hook-form # Formularios
yarn add zod # Validación
```

**Funcionalidades a implementar:**
- ✅ **Grid responsivo** (4/2/1 columnas según breakpoint)
- ✅ **Lazy loading** de imágenes con skeleton
- ✅ **Filtros avanzados** con URL sync
- ✅ **Búsqueda inteligente** con debounce
- ✅ **Animaciones** en hover y transiciones

### 🔧 **4. Arquitectura y Performance**

**Demuestra conocimientos avanzados:**
```bash
# Gestión de estado (elige):
yarn add zustand # Ligero y simple
yarn add @reduxjs/toolkit # Completo y establecido

# Optimizaciones:
yarn add react-window # Virtualización
yarn add @tanstack/react-query # Cache y sincronización
```

**Implementaciones esperadas:**
- ✅ **Custom hooks** para lógica reutilizable
- ✅ **Memoización** inteligente (React.memo, useMemo, useCallback)
- ✅ **Code splitting** con React.lazy
- ✅ **Optimistic updates** en Kanban
- ✅ **Error boundaries** y loading states

### 🎨 **5. Micro-interacciones y UX**

**Crea una experiencia premium:**
```bash
# Animaciones y transiciones:
yarn add framer-motion # Animaciones avanzadas
yarn add react-spring # Físicas naturales
yarn add lottie-react # Animaciones complejas
```

**Elementos a implementar:**
- ✅ **Transiciones suaves** entre páginas
- ✅ **Hover effects** en cards y botones
- ✅ **Loading states** elegantes
- ✅ **Toast notifications** para feedback
- ✅ **Skeleton screens** durante carga

### 🧪 **6. Testing y Calidad (Opcional)**

**Demuestra buenas prácticas:**
```bash
# Testing avanzado:
yarn add @testing-library/user-event
yarn add msw # Mock Service Worker
yarn add @storybook/react # Componentes aislados
```

**Cobertura recomendada (opcional):**
- ✅ **Unit tests** para componentes críticos
- ✅ **Integration tests** para flujos de usuario
- ✅ **Accessibility tests** con axe-core
- ✅ **Performance tests** con Lighthouse

### 📊 **Criterios de Evaluación**

| Área | Peso | Criterios |
|------|------|-----------|
| **Elección de Tecnologías** | 25% | Justificación técnica, modernidad, mantenibilidad |
| **Diseño y UX** | 25% | Consistencia visual, accesibilidad, responsive |
| **Funcionalidad** | 20% | Drag & drop, filtros, búsqueda, animaciones |
| **Performance** | 15% | Optimizaciones, bundle size, load time |
| **Testing** | 10% | Cobertura, tipos de tests, buenas prácticas *(opcional)* |
| **Código Limpio** | 5% | Estructura, naming, documentación |

### 🎯 **Entregables Esperados**

1. **Repositorio funcional** con todas las mejoras implementadas
2. **README actualizado** explicando decisiones técnicas
3. **Documentación** de arquitectura y decisiones
4. **Tests** con cobertura > 80% *(opcional pero recomendado)*

### 🚀 **Bonus Points (Opcional)**

- **Testing completo** con Storybook y cobertura > 80%
- **CI/CD** con GitHub Actions
- **Demo en vivo** (Vercel, Netlify, etc.)
- **PWA** con service workers
- **Internationalization** (i18n)
- **Analytics** y error tracking
- **Performance monitoring**

### ⏰ **Tiempo Estimado**

- **Mínimo**: 8-12 horas para implementación básica
- **Recomendado**: 16-20 horas para versión premium
- **Máximo**: 72 horas para implementación completa (Habiles)

### 📝 **Instrucciones de Entrega**

1. **Fork** este repositorio
2. **Implementa** todas las mejoras requeridas
3. **Documenta** tus decisiones técnicas en el README
4. **Envía** el link del repositorio

---

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

