@../../SECURITY.md

# Contexto del proyecto

Micrositio inmobiliario en React + Vite + TypeScript, desplegado en Cloudflare Workers con assets estáticos (SPA). Usa React Router para el routing client-side.

---

## Formularios HubSpot (`hs-form-frame`)

### Embed utilizado

El proyecto usa el embed moderno de HubSpot (NO el legacy `hbspt.forms.create()`):

```html
<script src="https://js.hsforms.net/forms/embed/50442232.js" defer></script>
<div class="hs-form-frame" data-region="na1" data-form-id="6b22924b-6cca-4508-b764-364917b3aeed" data-portal-id="50442232"></div>
```

El script se inyecta dinámicamente una sola vez en `<head>` desde el componente React (`HubSpotForm.tsx`), con un guard por ID para evitar duplicados si hay múltiples instancias del formulario en la misma página.

### Comportamiento al enviar el formulario

El embed `hs-form-frame` renderiza el formulario dentro de un `<iframe>`. Al enviar el formulario, HubSpot **redirige la ventana principal** (no solo el iframe) a la URL actual con el parámetro `?submissionGuid=UUID`, por ejemplo:

```
https://dominio.com/?submissionGuid=c60b213a-0752-4ed3-90f3-8c8daa2b05d4
```

> **Importante:** El evento `postMessage` con `type: "hsFormCallback"` y `eventName: "onFormSubmitted"` **no se dispara** con el embed `hs-form-frame`. Solo funciona con el embed legacy. No usar ese enfoque.

### Redirección a /gracias

La detección del envío se hace en el componente raíz (`App.tsx`) mediante un `useEffect` que lee `window.location.search` al montar:

```tsx
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  if (params.has("submissionGuid")) {
    navigate("/gracias", { replace: true });
  }
}, [navigate]);
```

- Se usa `replace: true` para que el botón "atrás" no lleve al usuario a `/?submissionGuid=...`.
- Esto aplica a todos los formularios del sitio simultáneamente, sin importar en qué sección estén, porque todos viven bajo la ruta `/`.

---

## Routing en Cloudflare Workers

El `wrangler.toml` usa `not_found_handling = "single-page-application"` para que cualquier ruta sin archivo estático sirva `index.html` y React Router tome el control:

```toml
name = "nombre-del-worker"
compatibility_date = "2024-03-11"

[assets]
directory = "./dist"

[assets.serving]
not_found_handling = "single-page-application"
```

> El archivo `public/_redirects` (estilo Netlify) **no tiene efecto** en Cloudflare Workers con `[assets]`. La configuración correcta es la de `wrangler.toml` arriba.

---

## Estructura de archivos relevante

```
src/
  main.tsx                        # BrowserRouter + Routes (/ y /gracias)
  app/
    App.tsx                       # Detecta submissionGuid y redirige a /gracias
    components/
      HubSpotForm.tsx             # Componente reutilizable del embed HubSpot
      LeadForm.tsx                # Sección "Plan Fundadores" — usa <HubSpotForm />
      Concept.tsx                 # Sección "La ciudad crece" — usa <HubSpotForm />
    pages/
      ThankYou.tsx                # Página /gracias
```
