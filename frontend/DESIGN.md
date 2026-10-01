---
version: alpha
name: Prism
description: Identidad visual de V.R.M — un panel oscuro donde la luz resalta las predicciones y modelos.
colors:
  primary: "#f8fafc"
  on-primary: "#0f172a"
  secondary: "#94a3b8"
  tertiary: "#8b5cf6"
  on-tertiary: "#ffffff"
  tertiary-container: "#7c3aed"
  neutral: "#020617"
  surface: "#1e293b"
  outline: "#475569"
  mark: "#06b6d4"
  positive: "#10b981"
  mora: "#f43f5e"
  error: "#ef4444"
typography:
  display:
    fontFamily: Fraunces
    fontSize: 2.25rem
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.02em
  title:
    fontFamily: Fraunces
    fontSize: 1.5rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -0.01em
  heading:
    fontFamily: IBM Plex Sans
    fontSize: 1rem
    fontWeight: 600
    lineHeight: 1.4
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: IBM Plex Mono
    fontSize: 0.6875rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.08em
  num-xl:
    fontFamily: IBM Plex Mono
    fontSize: 2.5rem
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.02em
    fontFeature: '"tnum"'
  num-md:
    fontFamily: IBM Plex Mono
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: '"tnum"'
rounded:
  sm: 4px
  md: 8px
  lg: 14px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
components:
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 20px
  card-caption:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-caps}"
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.heading}"
    rounded: "{rounded.md}"
    padding: 12px
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.tertiary-container}"
    textColor: "{colors.on-tertiary}"
  segment:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    height: 44px
  segment-active:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.md}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.num-md}"
    rounded: "{rounded.md}"
    padding: 12px
    height: 48px
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
  prediction-value:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.num-xl}"
  metric-chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: 8px
  top-feature-badge:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
  impact-bar-positive:
    backgroundColor: "{colors.positive}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  impact-bar-negative:
    backgroundColor: "{colors.mora}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  status-online:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.positive}"
    rounded: "{rounded.full}"
  skeleton:
    backgroundColor: "{colors.outline}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
---

## Overview

**Un panel donde la luz muestra el dato.** V.R.M ajusta tres regresiones lineales; la interfaz
debe verse como un dashboard moderno: fondo oscuro, acentos vibrantes, jerarquía clara.
Números exactos, tipografía nítida, foco en el modelo.

La pieza protagonista no es un gráfico decorativo sino **la ecuación**: cada
predicción se muestra junto con su descomposición `ŷ = β₀ + Σ βᵢ·xᵢ`, sus métricas
(R², MSE, RMSE) y la variable de mayor impacto. La UI enseña el modelo, no lo esconde.

Mobile first: el diseño se piensa desde 320 px de ancho y se expande a dos columnas en
pantallas grandes. La densidad es alta pero respirada: agrupar, no apilar.

## Colors

**Violeta y Cyan profundo.** Una paleta técnica —violeta neón, cyan eléctrico, esmeralda—
sobre un lienzo de carbón. Nada de tonos tierra ni plantillas. Identidad propia,
profesional y moderna.

**Cómo armonizan.** Tres acentos sobre oscuros fríos:

1.  **Carbón e tinta clara:** fondo, superficie, borde y texto comparten un matiz azul
    grisáceo frío y solo cambian de luminosidad. Por eso el violeta "pertenece" al
    panel y el cyan resalta sin chocar.
2.  **Violeta (acción):** el único color que invita a hacer algo. En las figuras son
    los puntos observados.
3.  **Cyan (marca):** acento de la identidad. Marca lo importante y es la recta en las
    figuras. Complementa el violeta y aporta frescura.
4.  **Esmeralda y Rosa (signo):** el coeficiente que sube y el que baja. Verde para
    impactos positivos, rosa para negativos.

**Tintes, no tokens nuevos.** Los fondos suaves salen del mismo token con opacidad
(`bg-mark/15`, `ring-tertiary/20`, `bg-positive/10`). Así cualquier tinte hereda la
armonía y la paleta no crece.

- **Primary (#f8fafc) — Tinta clara:** títulos, texto y contenido principal.
- **Secondary (#94a3b8) — Eje gris:** leyendas, metadatos, ayudas de campo.
- **Tertiary (#8b5cf6) — Violeta:** botón Calcular, ejercicio activo, foco y enlaces. Hover en **#7c3aed**.
- **Neutral (#020617) — Carbón profundo:** fondo de página.
- **Surface (#1e293b) — Slate 800:** tarjetas, campos y fondo de las figuras.
- **Outline (#475569) — Borde slate:** bordes, divisores, retícula y skeletons.
- **Mark (#06b6d4) — Cyan eléctrico:** acento de marca, recta en gráficas y avisos importantes.
- **Positive (#10b981) — Esmeralda:** coeficientes que suben la predicción y el estado "en línea".
- **Mora (#f43f5e) — Rosa:** coeficientes que bajan la predicción.
- **Error (#ef4444) — Rojo:** validación y fallos de red.

## Typography

Tres familias con un rol cada una:

- **Fraunces** (display, title): la voz del enunciado —nombre del ejercicio, títulos de sección. `display` sube a 3rem desde `lg`. Los números nunca van en esta familia.
- **IBM Plex Sans** (heading, body): lectura clara en tamaños pequeños; pariente técnico de Plex Mono.
- **IBM Plex Mono** (label-caps, num-xl, num-md): **todo número va en mono con cifras tabulares** (`tnum`) para que columnas, coeficientes y métricas se alineen. `label-caps` en mayúsculas para etiquetas de metadatos.

La predicción usa `num-xl`: es el elemento más grande de la pantalla después del título.
`display` pasa de 2.25rem a 3rem y `num-xl` de 2.5rem a 3.25rem desde `lg`.
La tabla de la ecuación y los comandos usan `text-code` (13 px) en móvil y 14 px desde `sm`.
Los campos usan `num-md` a **16 px como mínimo**: por debajo, iOS Safari hace zoom al enfocar.

## Layout

Base de espaciado de 4 px (la misma escala de Tailwind): `xs` 4, `sm` 8, `md` 16, `lg` 24, `xl` 40.

**Mobile first.** Los estilos base son los del teléfono (320–639 px); cada breakpoint
solo *añade*. Se usan los breakpoints por defecto de Tailwind, sin valores sueltos:

| Breakpoint | Desde | Qué cambia |
|---|---|---|
| base | 0 | Una columna, márgenes de 16 px, botón a todo el ancho, campos apilados. Encabezado: marca + historial + estado de la API, nada más (el historial se abre como hoja). Orden: título → selector de ejercicio → formulario → resultado → interpretación → figuras. |
| `sm` | 640 px | Márgenes de 24 px; campos en 2 columnas. |
| `md` | 768 px | Campos en 3 columnas; resultado e interpretación lado a lado. |
| `lg` | 1024 px | 12 columnas: título grande (`type-hero`, hasta 4.5rem) en 8 con su fila propia; selector de ejercicio debajo; formulario 5 + resultado e interpretación 7; figuras a todo el ancho. Campos vuelven a 1 columna. Sube la escala tipográfica. |
| `xl` | 1280 px | Nada nuevo: el contenedor se queda en 1152 px y se centra. |

Además de ancho, se respetan otras condiciones del dispositivo:

- `hover:` solo aplica en dispositivos con puntero fino (comportamiento de Tailwind v4); en táctil no quedan estados "pegados".
- `prefers-reduced-motion`: sin brillo en skeletons, sin giro en spinners, scroll sin animación.
- Muescas de iOS: el encabezado respeta `env(safe-area-inset-*)`; la altura usa `dvh`.
- Objetivos táctiles de al menos 44 px; el selector de 3 segmentos cabe en 320 px sin scroll horizontal.
- Al calcular en pantallas menores a `lg`, el resultado se desplaza a la vista.
- El fondo de página lleva una retícula tenue (24 px, violeta al 8%) que evoca la interfaz de un panel técnico.

## Elevation & Depth

Plano por defecto. La profundidad se comunica con **bordes de 1 px en outline** y
cambios de superficie (neutral → surface), no con sombras. Una única sombra suave
se permite en la tarjeta de resultado para marcarla como foco de la pantalla.

## Shapes

Esquinas contenidas: `sm` 4 px en chips y skeletons, `md` 8 px en campos y botones,
`lg` 14 px en tarjetas, `full` solo en barras de impacto e indicadores de estado.
Formas geométricas limpias; nada de orgánico.

## Components

- **Tarjetas de ejercicio (segment / segment-active):** radios nativos con el R² y las filas de cada modelo, un mini tablero del dataset.
- **Pie de página:** banda oscura que cierra la página; marca, nombre y enlaces.
- **Campo (input / input-error):** etiqueta en `heading`, unidad a la derecha, ayuda en `body-sm` con el rango de entrenamiento. Acepta coma o punto decimal.
- **Botón primario:** ancho completo en móvil, 48 px de alto, color violeta.
- **Tarjeta de resultado:** etiqueta `label-caps`, valor en `num-xl` con unidad, banda ± RMSE, chips de métricas y calificación del ajuste.
- **Barras de impacto:** coeficientes estandarizados normalizados al máximo; verde si suben, rosa si bajan.
- **Ecuación:** tabla mono con término, valor, coeficiente y aporte; la suma cierra en ŷ.
- **Skeleton:** bloques en outline con brillo lento.
- **Estado de API:** píldora con punto esmeralda (en línea), cyan (parcial) o rojo (sin conexión).

## Do's and Don'ts

- **Do** mostrar R² y RMSE junto a cada predicción.
- **Do** escribir la interfaz en español y los números con formato `es-CO`.
- **Do** usar skeletons con la forma del contenido final en cada carga.
- **Do** avisar cuando una entrada sale del rango de entrenamiento.
- **Don't** introducir un segundo color de acción; el violeta es el único.
- **Don't** usar el cyan como texto ni como botón de acción principal.
- **Don't** usar sombras para separar tarjetas; usa borde y superficie.
- **Don't** redondear métricas hacia arriba ni ocultar un ajuste moderado.
- **Don't** escribir `@media (min-width: …)` a mano: usa los breakpoints de Tailwind.

## Implementation

Tailwind CSS v4, configurado solo en CSS:

- `src/app/tokens.css` se **genera** desde este archivo con `npm run design:tokens` (colores y radios). No se edita a mano.
- `src/app/globals.css` define las utilidades tipográficas `type-*`, conectadas a las fuentes de `next/font`, más `graph-paper` y `skeleton`.
- `npm run design:lint` valida este archivo.
