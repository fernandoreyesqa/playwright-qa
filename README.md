# Playwright + Cucumber (Gherkin) - Framework de Automatización

## Tecnologías utilizadas
- [Playwright](https://playwright.dev/) - Automatización de browsers
- [Cucumber](https://cucumber.io/) - Framework BDD
- [TypeScript](https://www.typescriptlang.org/) - Lenguaje de programación
- [Allure](https://allurereport.org/) - Reportes de ejecución

---

## Instalación

```bash
npm install
npx playwright install
```

---

## Estructura del proyecto
playwright/
├── features/               ← Escenarios en Gherkin (.feature)
│   ├── login/
│   ├── inventory/
│   ├── carro/
│   └── checkout/
├── step-definitions/       ← Implementación de los pasos
├── pageobjesct/            ← Page Object Model
├── support/                ← Hooks y configuración
│   ├── hooks.ts
│   └── env.ts
├── config/                 ← Configuración de entorno
├── allure-results/         ← Resultados de ejecución (generado automáticamente)
├── allure-report/          ← Reporte HTML (generado automáticamente)
├── evidencia/              ← Screenshots
├── cucumber.json
├── playwright.config.ts
└── tsconfig.json

---

## Ejecutar tests

### Todos los features
```bash
npm run test:bdd
```

### Por módulo (tag)
```bash
# Login
npx cucumber-js --tags @login

# Inventario
npx cucumber-js --tags @invetario

# Carro de compras
npx cucumber-js --tags @carro

# Checkout
npx cucumber-js --tags @checkout
```

### Combinar tags
```bash
# Varios módulos
npx cucumber-js --tags "@login or @invetario"

# Excluir un tag
npx cucumber-js --tags "not @ordenar"
```

### Validar steps sin ejecutar el browser
```bash
npx cucumber-js --dry-run
```

---

## Tags disponibles

| Tag | Descripción |
|-----|-------------|
| `@login` | Tests del módulo de login |
| `@invetario` | Tests del módulo de inventario |
| `@carro` | Tests del módulo de carro de compras |
| `@checkout` | Tests del módulo de checkout |
| `@ordenar` | Tests de ordenamiento de productos |

---

## Reporte Allure

```bash
# Generar y abrir el reporte
npm run allure:report

# Solo generar
npm run allure:generate

# Solo abrir
npm run allure:open
```

---

## Ambientes disponibles

| Ambiente | Archivo |
|----------|---------|
| QA | `.env.qa` |
| Pre-producción | `.env.preprod` |

Para cambiar de ambiente:
```bash
# QA (por defecto)
npm run test:bdd

# Pre-producción
ENV=preprod npm run test:bdd
```

---

## Palabras clave Gherkin en español

Agregar `# language: es` al inicio del archivo `.feature` para usar las palabras clave en español.

| Inglés | Español |
|--------|---------|
| `Feature` | `Característica` |
| `Scenario` | `Escenario` |
| `Given` | `Dado` / `Dada` |
| `When` | `Cuando` |
| `Then` | `Entonces` |
| `And` | `Y` |
| `But` | `Pero` |
| `Scenario Outline` | `Esquema del escenario` |
| `Examples` | `Ejemplos` |

> **Importante:** Las palabras clave en español solo aplican en los archivos `.feature`.
> Los step definitions en TypeScript siempre usan `Given`, `When`, `Then`.