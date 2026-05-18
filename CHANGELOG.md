# 📋 Changelog

Todas las modificaciones notables de este proyecto serán documentadas en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] - 2025-12-24 (Add more questions) 
- **Añadimos mas Preguntas:** Añadimos mas preguntas.

## [1.0.2] - 2025-12-24 (Add more questions) 
- **Añadimos mas Preguntas:** Añadimos mas preguntas.

## [1.0.1] - 2025-12-24 (BugFix Questions Hotspot Release) 
- **Preguntas Hotspot:** Cambiamos las imagenes a .svg y arreglamos un error que no dejaba ver las imagenes en el navegador.

## [1.0.0] - 2025-12-22 (Stable Release)
Versión estable con motor modular, soporte gráfico interactivo y sistema de reportes.

### ✨ Added (Nuevas Funcionalidades)
- **Preguntas Hotspot:** Motor gráfico interactivo que permite responder haciendo clic sobre coordenadas específicas de una imagen. Incluye indicador visual (📍) y validación por rango de error.
- **Algoritmo de Selección Inteligente:** El sistema garantiza **mínimo 2 preguntas por Topic** y rellena el resto aleatoriamente hasta llegar a 70 preguntas.
- **Sistema de Reportes Detallado:** Tabla final desglosada por **Topic**, mostrando puntuación y porcentaje con código de colores (Aprobado/Fallo).
- **Exportación CSV:** Botón para descargar un informe detallado `.csv` de las preguntas realizadas.
- **Botón "Finish Now":** Opción para finalizar el examen inmediatamente; las preguntas no respondidas cuentan como fallo.
- **Temporizador Visual:** Alerta de fondo rojo cuando quedan menos de 5 minutos.

### ♻️ Changed (Refactorización)
- **Arquitectura Modular:** Migración de `const DATA` a archivos separados en `db/topic_XX.js`.
- **Etiquetado Automático:** Función `window.loadTopic` para inyectar metadatos de los temas automáticamente.
- **Assets Vectoriales:** Generación de imágenes SVG ligeras (`mount_output.svg`, `rpm_release.svg`) para las preguntas Hotspot, eliminando dependencias de archivos binarios pesados.

### 🐛 Fixed (Correcciones)
- Corregido error de carga asíncrona entre el motor y la base de datos.
- Solucionado el soporte de **Drag & Drop** en dispositivos móviles y tablets mediante Polyfill.

---

## [0.5.0] - 2025-12-21 (Content Expansion Beta)
Expansión del banco de preguntas y primeras pruebas de tipos complejos.

### ✨ Added
- **Banco de Preguntas:** Inclusión de +100 preguntas nuevas (Vim, Permisos Avanzados, Networking, RPM/Zypper).
- **Lógica de Coordenadas:** Primeros tests de lógica para validación X/Y en imágenes.

### ♻️ Changed
- Mejora del CSS para la visualización de preguntas tipo `ORDER` y `MATCHING`.

---

## [0.1.0] - 2025-12-20 (Initial Beta)
Lanzamiento inicial del motor del simulador (POC).

### ✨ Added
- Estructura básica HTML5/CSS3.
- Motor de Quiz en JavaScript Vanilla.
- Soporte básico para preguntas: Single Choice, Multiple Choice, Fill in the blank, Drag & Drop.
- Cronómetro básico de 90 minutos.
