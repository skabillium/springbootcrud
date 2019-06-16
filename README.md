# springbootcrud

This springbootcrud is a sample project assigned to me by PublicSoft with the purpose of proving my skill in back-end, as well as front-end, implementation.

## Specifications

* Create a CRUD + Search REST-API for the Supplier entity.
* The Search needed to be functional for Company Name and VAT Number.
* Lastly, document the api.

## Dependencies

To use the project the following dependencies need to be installed:
* OpenJDK 1.8
* Maven 3.x
* Git 2.x
* MySQL 5.x
* Node.js 6.x

### Server Application

* Create an empty database with name: springbootcrud
* Open the file: springbootcrud-webapp/src/main/resources/application.properties and
modify the following properties, depending on your MySQL installation: 
* spring.datasource.username=root
* spring.datasource.password=root
* Run the Application.class

### Client Application

To install and run the client application run the following commands in the root folder of the project

```bash
cd springbootcrud-client
npm install
npm run dev
```

## API Documentation

```url
{
    "hello": "world"
}
```