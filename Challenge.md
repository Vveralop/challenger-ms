# Tech Challenge 📑

Se debe generar un microservicio en nodejs que crea y obtenga contratos desde una base de datos.

# Requisitos📌 

1. Utilizar el archivo challenge-test.yaml como documentación.
2. Utilizar la versión de nodejs 20.16.0
3. El framework a utilizar debe ser NestJS.
4. Se deben exponer 2 endpoint, API REST, a partir de la definición entregada en la documentación.
5. Se deben agregar test e2e utilizando supertest.
6. Agregar readme del proyecto con información técnica que considere relevante.
7. La base de datos a utilizar debe ser postgresql. Utilizar el siguiente script para la creación de la tabla
```bash
CREATE TABLE contract(id SERIAL PRIMARY KEY, clientname TEXT NOT NULL, email TEXT NOT NULL, initialdate TIMESTAMP NOT NULL, accountNumber TEXT, amount BIGINT, currency INTEGER);

```
# Criterio de evaluación de código entregado (máximo 2 días después de iniciar el proceso de entrevista)📌 

1. Utilizar Prisma como ORM.
2. Respetar principio SOLID.
3. Aplicar arquitectura hexagonal.
