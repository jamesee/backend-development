# Backend Development

Code repository for the `Fundamentals in Backend Development` course.

## Requirements

1. Node.js: https://nodejs.org/en/download/
2. Postgres: https://www.postgresql.org/download/
3. Docker: https://www.docker.com/products/docker-desktop
4. Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli

## Folder Structure

### Backend service

The backend service code is split into different stages to illustrate the incremental development of the application.

1. `5a-crud`: Basic CRUD setup
2. `5b-postgres`: Using Postgres with our app
3. `5c-dependency-injection`: Refactoring to use dependency injection
4. `5d-jwt`: Using JWT as authentication
5. `5e-swagger`: Adding Swagger documentation
6. `6a-unit-tests`: Adding unit tests
7. `6b-integration-tests`: Adding integration tests
8. `7a-docker`: Dockerizing our app
9. `7b-heroku`: Deploying to Heroku
10. `7c-github-actions`: Incorporating GitHub Actions

### Examples

The `examples` folder contains code examples for different concepts, e.g. `unit-testing`.

## Usage

In order to run the application in **each** folder, you will need to perform the following steps

```bash
# Change to the directory, e.g. 5a-crud
$ cd 5a-crud

# Install project dependencies
$ npm install

# Start server
$ npm run start
```
