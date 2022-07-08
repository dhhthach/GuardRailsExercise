

# Guardrails

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

## Development server (without Docker)

```
npx nx run-many --target=serve --projects=api,dashboard --parallel
``` 
for a dev server. Navigate to http://localhost:4444/.

## Development server (with Docker)

Run this command to build and create docker images for api and dashboard. The build artifacts will be stored in the `dist/` directory
```
npx nx run-many --target=deploy --projects=api,dashboard --parallel
```
then
```
docker-compose up
```
to make local environment ready. Navigate to http://localhost:4444/.


## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.
