
# Polpou Challenge Frontend

Modern React + TypeScript + Vite application for the Polpou challenge.


## Decisiones técnicas principales

### 1. Estado global con Zustand
Toda la gestión de estado global (carrito, filtros, tareas Kanban) se realiza con Zustand. Permite un estado reactivo, simple y escalable, sin la complejidad de Redux.

### 2. Estilos con Tailwind CSS
Tailwind se usa para estilos utilitarios, responsivos y dark mode. Se implementó un tema personalizado y variantes para modo oscuro. El enfoque utility-first permite iterar rápido en UI, mantener consistencia visual y evitar CSS innecesario. El grid de productos y los componentes clave usan clases Tailwind para adaptabilidad y diseño moderno.

### 3. Accesibilidad
Se auditaron y mejoraron los componentes clave para navegación por teclado, roles ARIA y feedback visual accesible. Se usa `jest-axe` y `axe-core` para pruebas automáticas.

### 4. Code Splitting y Suspense
Las páginas principales (`Kanban`, `Products`) se cargan con `React.lazy` y `Suspense` para mejorar el rendimiento y reducir el tiempo de carga inicial.

### 5. Animaciones y Transiciones
Se utiliza `framer-motion` para animaciones suaves en la carga de productos, transiciones de página y feedback visual (hover, drag, aparición de productos y skeletons).

### 6. Toasts y Feedback
Se usa `sonner` para notificaciones tipo toast. Se implementó deduplicación robusta para evitar mensajes duplicados, incluso bajo React Strict Mode.

### 7. ESLint y Calidad de Código
Configuración moderna de ESLint con reglas estrictas y type-aware, usando `eslint-plugin-react-x` y `eslint-plugin-react-dom` para mejores prácticas en React y DOM.

### 8. Stack Moderno
- React 19
- Vite 5
- Tailwind CSS
- TypeScript
- Framer Motion
- Sonner (Toaster)
- Headless UI
- Zustand
- React Query
- React Window
- React Router
- Testing Library, jest-axe, axe-core
- PWA (Progressive Web App): El proyecto incluye soporte PWA para instalación en dispositivos y funcionamiento offline, usando manifest y service worker.


## Testing, Accesibilidad y Performance

### Testing

El proyecto utiliza **Vitest** y **Testing Library** para pruebas unitarias y de integración. La configuración de tests se encuentra en `src/tests/setup.ts`.

Para ejecutar los tests:

```bash
npm run test
```

Para ver el coverage:

```bash
npm run test:coverage
```

#### Accesibilidad (A11y)

Se usa **jest-axe** y **axe-core** para validar accesibilidad en componentes. Ejemplo de uso en un test:

```ts
import { axe, toHaveNoViolations } from 'jest-axe';
expect(await axe(container)).toHaveNoViolations();
```

Puedes ver ejemplos en los archivos `.a11y.test.tsx` dentro de `src/tests/`.

### Performance

Para medir el rendimiento, se utiliza **Lighthouse**. El reporte se genera automáticamente y se guarda en `lighthouse-report.html`.

Para correr la prueba de performance:

1. Inicia el servidor local:
   ```bash
   npm run dev
   ```
2. En otra terminal, ejecuta:
   ```bash
   npm run lighthouse
   ```

Esto generará el archivo `lighthouse-report.html` con el análisis de performance, accesibilidad, PWA y mejores prácticas.

---
## Expansión de la configuración ESLint


Puedes instalar [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) y [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) para reglas específicas de React:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
