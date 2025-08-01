# Documentación de Arquitectura y Decisiones Técnicas

## 1. Resumen General
Este documento describe la arquitectura, los patrones y las decisiones técnicas del proyecto Polpou Challenge Frontend. El objetivo es garantizar mantenibilidad, escalabilidad y una experiencia de usuario moderna y accesible.

---

## 2. Arquitectura de la Aplicación

### 2.1 Estructura de Carpetas
- **src/**: Código fuente principal
  - **components/**: Componentes reutilizables (UI, feedback, layouts)
  - **pages/**: Páginas principales (Kanban, Products, Home, NotFound)
  - **hooks/**: Custom hooks para lógica compartida
  - **services/**: Acceso a datos y lógica de negocio
  - **store/**: Estado global con Zustand
  - **styles/**: Archivos CSS y configuración Tailwind
  - **types/**: Tipos TypeScript
  - **tests/**: Pruebas unitarias y de accesibilidad
  - **public/**: Assets estáticos, manifest.json para PWA

### 2.2 Principales Patrones y Librerías
- **React 19**: UI declarativa y componentes funcionales
- **Vite 5**: Bundler rápido, HMR y optimización de desarrollo
- **TypeScript**: Tipado estricto y seguridad en tiempo de compilación
- **Tailwind CSS**: Utility-first, tema personalizado, dark mode
- **Zustand**: Estado global simple y reactivo
- **React Query**: Gestión de datos remotos y caché
- **Framer Motion**: Animaciones y transiciones fluidas
- **Sonner**: Toasts y feedback visual
- **Headless UI**: Componentes accesibles y personalizables
- **React Window**: Virtualización de listas y grids
- **React Router**: Navegación SPA
- **Testing Library, jest-axe, axe-core**: Pruebas unitarias y de accesibilidad
- **PWA**: Manifest y service worker para instalación y offline

---

## 3. Decisiones Técnicas Clave

### 3.1 Estado Global con Zustand
- Se eligió Zustand por su simplicidad, rendimiento y API reactiva.
- El estado del carrito, filtros y tareas Kanban se gestiona en stores independientes.
- Permite persistencia y sincronización entre componentes sin boilerplate.

### 3.2 Estilos con Tailwind CSS
- Utility-first para evitar CSS innecesario y facilitar refactorización.
- Tema personalizado y variantes para dark mode.
- Grid responsivo y adaptabilidad en todos los componentes clave.

### 3.3 Accesibilidad
- Uso de roles ARIA, navegación por teclado y feedback visual accesible.
- Pruebas automáticas con jest-axe y axe-core.
- Headless UI para componentes accesibles y personalizables.

### 3.4 Code Splitting y Suspense
- Páginas principales (`Kanban`, `Products`) cargadas con React.lazy y Suspense.
- Mejora el rendimiento y reduce el tiempo de carga inicial.

### 3.5 Animaciones y Transiciones
- Framer Motion para animaciones suaves en carga de productos, transiciones de página y feedback visual.
- Aparición progresiva de productos y skeletons.

### 3.6 Toasts y Feedback
- Sonner para notificaciones tipo toast.
- Deduplicación robusta para evitar mensajes duplicados, incluso bajo React Strict Mode.

### 3.7 ESLint y Calidad de Código
- Configuración moderna con reglas estrictas y type-aware.
- Uso de eslint-plugin-react-x y eslint-plugin-react-dom para mejores prácticas.

### 3.8 PWA (Progressive Web App)
- Manifest.json y service worker para instalación en dispositivos y funcionamiento offline.
- Permite experiencia nativa y resiliencia ante desconexiones.

---

## 4. Principios de Diseño
- **Simplicidad y claridad**: Componentes pequeños, funciones puras y lógica desacoplada.
- **Escalabilidad**: Estructura modular y stores independientes.
- **Accesibilidad**: UI usable por teclado y lectores de pantalla.
- **Performance**: Code splitting, virtualización y caché de datos.
- **Consistencia visual**: Tailwind y tema personalizado.
- **Feedback inmediato**: Animaciones y toasts para acciones clave.

---

## 5. Referencias y Recursos
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Framer Motion](https://www.framer.com/motion/)
- [Sonner](https://sonner.emilkowal.dev/)
- [Headless UI](https://headlessui.com/)
- [React Query](https://tanstack.com/query/latest)
- [React Window](https://react-window.vercel.app/)
- [React Router](https://reactrouter.com/)
- [Testing Library](https://testing-library.com/)
- [axe-core](https://github.com/dequelabs/axe-core)

## 6. Posibles Mejoras Futuras

- **Internacionalización (i18n):** Agregar soporte multilenguaje para ampliar el alcance global.
- **Tests E2E:** Integrar pruebas end-to-end (Cypress, Playwright) para validar flujos completos.
- **Optimización de performance:** Analizar y reducir el tamaño de los bundles, lazy loading avanzado y optimización de imágenes.
- **Mejorar PWA:** Añadir notificaciones push y sincronización en background.
- **Integración CI/CD:** Automatizar despliegues y pruebas en pipelines.
- **Documentación interactiva:** Usar Storybook para documentar y testear componentes visuales.
- **Accesibilidad avanzada:** Validar con usuarios reales y herramientas especializadas.
- **Integración con APIs externas:** Mejorar la gestión de errores y la resiliencia ante fallos de red.
- **Monitoreo y logging:** Añadir herramientas de monitoreo de errores y rendimiento en producción.