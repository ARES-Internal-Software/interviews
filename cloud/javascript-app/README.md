# Javascript App

<https://github.com/ARES-Internal-Software/interviews/tree/main/cloud/javascript-app>

## App information

- Nestjs REST App
- Node Version 22.19.0 (LTS)
- MySql Version 8.4.6 (LTS) oder MariaDB 11.3.2 (LTS)
- Port: 3000
- Environment variables:
  - DB_HOST (Database Host for MySql)
  - DB_PORT=3306 (Standard)
  - DB_USERNAME
  - DB_PASSWORD
  - DB_DATABASE (Database name)
  - APP_PORT=3000 (Standard)
  - DB_LESS=no (If no or option is missing then it uses a database. If yes then simple app without database and api.)

## Swagger integration

- /api 
  - more info <https://swagger.io/tools/swagger-ui/>
- /swagger-stats 
  - more info <https://swaggerstats.io>

## REST Endpoints

- [GET] / (Hello Screen)
- [GET] /users (show all users)
- [GET] /users/{id} (show user with id)
- [DELETE] /users/{id} (delete user with id)
- [POST] /users (create new user)
  - JSON with lastname (string), firstname (string), someinfo (string), isActive (boolean)

## Installation

```bash
npm install
```

## Build

```bash
npm run build
```

**The html folder must be copied manually into the container, as it is not created automatically during the build process. It must be located in the app folder at the same level as the dist folder.**

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## License

App is Provided as is, without warranty of any kind
Nest is [MIT licensed](LICENSE).