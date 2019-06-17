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

### **Person routes**

#### Pre-built routes by PublicSoft

 **GET**
 * **"/persons"**  : returns all the persons.
 * **"/persons/{id}"** : returns a specific person.
 * **"/persons/search/findByQuery?query={query}"**: returns all the users that have emails or names matching the query.
 * **"/persons/search/countActiveUsers"**: returns the number of active users.

 **POST**
 * **"/persons"**: adds a person to the database.

 **PATCH**
 * **"/persons/{id}"**: updates all the fields of a user record in the database.

 **PUT**
 * **"/suppliers/{id}"**: updates specific fields of a user record in the database.

 **DELETE**
 * **"/persons/{id}"**: deletes a user record in the database.

#### Routes I created

 **GET**
 * **"/persons/search/findActive?query={query}"**: returns all the active users that have emails or names matching the query.

### **Supplier routes**

 **GET**
 * **"/suppliers"**: returns all the suppliers.
 * **"/suppliers/{id}"**: returns a specific supplier.
 * **"/suppliers/search/findByQuery?query={query}"**: returns all the suppliers with company names or vat numbers matching the query.

 **POST**
 * **"/suppliers"**: adds a supplier to the database.

 **PATCH**
 * **"/suppliers/{id}"**: updates all the fields of a supplier record in the database.

 **PUT**
 * **"/suppliers/{id}"**: updates specific fields of a supplier record in the database.

 **DELETE**
 * **"/suppliers/{id}"**: deletes a supplier record from the database.

## Front-end

### Specifications

 The goal of the front-end part of the project was to facilitate all the basic CRUD operations plus the search for the supplier entity. All of the forementioned specifications were met exactly as they were specified.

### Project design choices

 I chose to follow the same coding and design patterns and behaviors to maintain a consistent code base. Such examples are the structure of the files I created,the use of the $http prototype method and the use of the $messages constant.

### Features added

Bellow are the features not specified by the assigned project that I decided to add:
* A checkbox to show only the active persons in the query results.
* A counter for the active persons in the persons page.

## Concessions

 I would like to implement swagger-ui to the api but decided to add the extra front-end features instead due to time constraints.

