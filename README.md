# Reto Indra
- Crear una API en Node.js con el framework Serverless para un despliegue en AWS.
- Adaptar y transformar los modelos de la API de prueba. Se tienen que mapear todos los nombres de atributos modelos del inglés al español (Ej: name -> nombre).
- Integrar la API de prueba StarWars API (líneas abajo está el link) se deben integrar uno o más endpoints.
- Crear un modelo de su elección mediante el uso de un endpoint POST, la data se tendrá que almacenar dentro de una base de datos.
- Crear un endpoint GET que muestre la data almacenada.



## Cómo usar
### Instalar dependencias:
```
$ npm install
```

### Despliegue son serverless

```
$ serverless deploy
```

Luego del despliegue, se observará algo simular a esto:

```bash
Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: aws-node-http-api-project-dev-hello (1.9 kB)
```

### Consulta de servicios

Luego del despliegue se puede consultar los servicios de esta forma:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/planets
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/people
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/people/{id}
```

Se obtendra respuesta de este tipo

```json
{
  "objAttr": ""
}
```


## Despliegue por comando de npm:

```bash
  npm run aws:deploy
```

## Ejecución de Tests
```bash
  npm run test
```

## Ejecución de Tests con coverage
```bash
  npm run test:coverage
```

# Documentación

## Reto-Swapi-Indra
Reto-Swapi-Indra

## Version: 1.0.0

### /swapi/people

#### GET
##### Summary:

lista personajes de Swapi

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 404 | data not found |
| 500 | internal error |

### /swapi/planets

#### GET
##### Summary:

lista planetas de Swapi

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 404 | data not found |
| 500 | internal error |

### /people

#### POST
##### Summary:

Registrar persona

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 400 | data not found |
| 500 | internal error |

#### GET
##### Summary:

Listar personas registradas

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 404 | data not found |
| 500 | internal error |

### /people/{id}

#### GET
##### Summary:

Obtener datos de persona por id

##### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ---- |
| id | path | ID of person to return | Yes | string (UUID) |

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | successful operation |
| 404 | data not found |
| 500 | internal error |

