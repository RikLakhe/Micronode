# Microservice Practice Boilerplate

## Postgres, Express, Node

### Prerequisites

- [Node.js](https://yarnpkg.com/en/docs/install)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Git](https://git-scm.com/downloads)
- [PostgreSQL](https://www.postgresql.org/download/)

### Installation

#### 1. Clone the repository and install dependencies

```sh
git clone https://github.com/RikLakhe/micronode-user.git
$ yarn
```

##### 2. Copy `.env.example` as `.env` file inside your root directory. Update the environment variables based on stage

```sh
cp .env.example .env
```

##### 3. Run migration to sync the database state

```sh
yarn migrate
```

##### 4. Seed the database

```sh
yarn seed
```

## Development Workflow

Start the development server.

```sh
yarn start:dev

```