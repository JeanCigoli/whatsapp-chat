# Microservice - WhatsApp

This project holds a chatbot to sale products and events, it can use to get more information about the company to.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Features

- Create new company to use chatbot.
- Create products and events.
- Control yours sales.
- Integration with whatsapp to sale.

## Documentation

[Documentation](https://www.doclink.com.br)

## Run Locally

Run with Docker and VS Code:

1. Install the [Visual Studio Code Remote - Containers](https://code.visualstudio.com/docs/remote/containers) and follow the instructions to open the project.

2. Set the required environment variables as described below

Start the API with the command below:

```bash
  yarn server:dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

#### SERVER

`NODE_ENV`

`PORT`

`BASE_URI`

#### SQL DATABASE

`DB_DIALECT`

`DB_HOST`

`DB_USERNAME`

`DB_PASSWORD`

`DB_PORT`

#### API'S

`API_AUTHENTICATION`

#### RABBITMQ

`RABBIT_USER`

`RABBIT_PASSWORD`

`RABBIT_HOST`

`RABBIT_PORT`

## Authors

- [@jeancigoli](https://github.com/JeanCigoli)
