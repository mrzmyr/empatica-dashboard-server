## Empatica Dashboard (Server)

> Server for the [empatica-dashboard-client](https://github.com/mrzmyr/empatica-dashboard-client)

#### Functionality

- [x] token-based authentication via [`emptica-api`](https://github.com/mrzmyr/empatica-api)
- [x] session fetching via [`emptica-api`](https://github.com/mrzmyr/empatica-api)

### Install

Install all node modules that are used by the application

```sh
npm install
```

### Usage

Start a **development** server on: [http://localhost:3001/](http://localhost:3001/)

```sh
npm run start
```

To prevent hitting the original empatica api in development on [http://localhost:3002/](http://localhost:3002/)

```sh
npm run mock
```
