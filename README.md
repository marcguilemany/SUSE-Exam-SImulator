# 🐧 SUSE SCA 15 Exam Simulator

Un simulador de examen ligero, gratuito y **sin backend** diseñado para ayudar a estudiar para la certificación **SUSE Certified Administrator (SCA 15)**.

Funciona completamente en el navegador (Client-side) utilizando HTML5, CSS3 y Vanilla JavaScript moderno.

## 🚀 Características

* **Sin instalación:** Solo necesitas un navegador web.
* **Diseño Responsivo:** Funciona en PC, Tablets y Móviles.
* **Persistencia de Estado:** Puedes navegar entre preguntas (anterior/siguiente) y tus respuestas se guardan mientras no recargues la página.
* **Soporte Táctil:** Incluye polyfill para que el *Drag & Drop* funcione perfectamente en pantallas táctiles.
* **Tipos de Preguntas Soportados:**
    * 🔘 Selección Única (Single Choice)
    * ☑️ Selección Múltiple (Multiple Choice)
    * ⌨️ Rellenar hueco (Fill in the blanks - Case Insensitive)
    * 🔃 Ordenar (Drag & Drop de dos columnas)
    * 🔗 Unir conceptos (Matching)
    * 📍 Hotspot (Clic en imagen con coordenadas)

## 🎮 Cómo usarlo

### Opción 1: Online (GitHub Pages)
Puedes probar la última versión directamente desde el despliegue automático (si has activado GitHub Pages):
> **[Enlace a tu GitHub Pages aquí]**

### Opción 2: Local
1.  Descarga este repositorio o clónalo:
    ```bash
    git clone [https://github.com/marcguilemany/SUSE-Exam-SImulator.git](https://github.com/marcguilemany/SUSE-Exam-SImulator.git)
    ```
2.  Abre el archivo `exam_simulator.html` (o `index.html`) en tu navegador favorito (Chrome, Firefox, Edge, Safari).

## 📝 Cómo añadir preguntas

Todas las preguntas se encuentran dentro de la constante `DATA` en el script principal. Puedes añadir tantas como quieras siguiendo estos formatos JSON:

### 1. Selección Única (SINGLE)
```javascript
{
    type: "SINGLE",
    text: "Pregunta aquí...",
    options: [
        {text: "Opción incorrecta", correct: false},
        {text: "Opción correcta", correct: true}
    ],
    rationale: "Explicación de por qué es correcta."
}
```

2. Selección Múltiple (MULTI)
```javascript

{
    type: "MULTI",
    text: "Selecciona 2 opciones...",
    options: [
        {text: "Correcta 1", correct: true},
        {text: "Correcta 2", correct: true},
        {text: "Incorrecta", correct: false}
    ],
    rationale: "Explicación..."
}
```
3. Rellenar hueco (FILL)
```javascript

{
    type: "FILL",
    text: "Comando para listar archivos...",
    validAnswers: ["ls", "ls -l"], // Acepta varias variantes
    rationale: "El comando es ls."
}
```
4. Ordenar (ORDER)
El usuario debe arrastrar los ítems a la columna derecha en el orden correcto.

```javaScript

{
    type: "ORDER",
    text: "Ordena los pasos de arranque...",
    items: ["BIOS", "Bootloader", "Kernel", "Init"], // Orden inicial (se baraja solo)
    correct: ["BIOS", "Bootloader", "Kernel", "Init"], // Orden correcto esperado
    rationale: "Explicación del orden."
}
```
5. Unir / Matching (MATCHING)
```javaScript

{
    type: "MATCHING",
    text: "Une los directorios con su función.",
    pairs: [
        {term: "/etc", def: "Configuración"},
        {term: "/bin", def: "Binarios"},
        {term: "/home", def: "Usuarios"}
    ],
    rationale: "Explicación..."
}
```
6. Hotspot / Imagen (HOTSPOT)
El usuario debe hacer clic en una zona de la imagen. El margen de error es del 10%.

```javaScript

{
    type: "HOTSPOT",
    text: "Haz clic en la carpeta /etc.",
    image: "URL_DE_LA_IMAGEN.png",
    target: {x: 35, y: 35}, // Coordenadas X e Y en porcentaje (0-100)
    rationale: "/etc contiene configuraciones."
}
```

🛠️ Tecnologías
HTML5 / CSS3: Diseño limpio y moderno.

JavaScript (ES6+): Lógica del motor de examen.

Mobile Drag Drop Polyfill: Librería externa (CDN) para soporte táctil.

📄 Licencia
Este proyecto es de código abierto. Siéntete libre de usarlo para estudiar o modificarlo para tus propias necesidades.