# alriyada

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Runtime and security update

Use Node.js 22.12+ (Node 22 is selected by `.nvmrc` and CI), or Node.js 24.
Angular framework packages are aligned on 20.3.x, with matching Angular CLI/SSR
20.3.x tooling, TypeScript 5.8.x, Zone.js 0.15.x and the Angular 20 carousel.
The migration preserves NgModules and the existing HTTP interceptor.

### SSR allowed hosts

Before starting the production SSR server, set `NG_ALLOWED_HOSTS` to the
comma-separated public hostnames served by this application, without protocols
or paths. Include both apex and `www` names if both are used. For example:

```sh
NG_ALLOWED_HOSTS=example.com,www.example.com npm run serve:ssr:alriyada
```

Replace the example names with the actual deployment domains. Local development
allows `localhost` and `127.0.0.1`. Do not configure a wildcard: Angular validates
the request host before rendering. The production build also prerenders routes;
the configured backend must be reachable for API content to be included.

### Validation

```sh
npm ci
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
npm run test:security
npm audit --omit=dev
```

The unit suite includes SVG script regression checks for CVE-2026-22610.
Express remains on version 4, with an updated `qs` dependency that fixes
SNYK-JS-QS-15268416. CI runs installation, the production build, unit tests, the qs security regression and
an audit of production dependencies. A complete audit also reports existing
issues in development tooling; these require a separate tooling update and are
not covered by the production-only audit.

Before deployment, smoke-test a nested SSR route with query parameters, a static
asset, browser navigation/hydration, translations, forms and the carousel using
the live backend.
