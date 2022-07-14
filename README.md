

# Guardrails

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

## Development server (with Docker)

Run this command to build and create docker images for api and dashboard. The build artifacts will be stored in the `dist/` directory
```
npx nx run-many --target=deploy --projects=api,dashboard --parallel
```
then
```
docker-compose up -d
```
to make local environment ready. Navigate to http://localhost:4444/.

## Development server (without Docker)

```
npx nx run-many --target=serve --projects=api,dashboard --parallel
``` 
for a dev server. Navigate to http://localhost:4444/.

## Running unit tests

```
npx nx run-many --target=test --projects=api,dashboard --parallel
```

# API Details

Start the application and navigate to http://localhost:4444/swagger.

## Tech stack
- TypeORM with Postgres
- NestJS v9

## Code structure 
- **Controller layer**: Handle request from UI service
- **Service layer**: Business logic for application happens here
- **Repository layer**: Working with database (TypeORM)
- and **DTOs**

# Dashboard Details

## Tech stack
- React v18
- Yup
- React Semantic UI
