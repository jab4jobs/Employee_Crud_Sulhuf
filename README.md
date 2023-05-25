# Employee_Crud_Sulhuf

crud operation: Employees


APIs
-----
-----

MEAN
DB: MongoDB, localhost

Run Server Command: npm start  //open project directory folder from terminal and run command

Requesting APIs Tool: Postman
-----------------------------
Create New Employee: http://localhost:8000/employee/create     POST
  
  Postman: Body, raw, JSON
  payload: {
      "name": "jabir",
      "position": "sr backend developer",
      "email": "any@gmail.com",
      "phone": "123456789",
      "address": "address text comes here",
      "country": "Kuwait"
  }
  

Get All List: http://localhost:8000/employee?name=ja&count=10&pageNo=1    GET
Query Params: name, count, pageNo

Get Employee by Id: http://localhost:8000/employee/63c6567418a5c2329ef5d3e4   GET

Update Employee: http://localhost:8000/employee/update/63c6567418a5c2329ef5d3e4  PUT
  Postman: Body, raw, JSON
  payload: {
      "name": "Shaik",
      "position": "sr fullstack developer",
      "email": "any2@gmail.com",
      "phone": "987456120",
      "address": "address2 any thing text",
      "country": "UAE"
  }

Delete Employee: http://localhost:8000/employee/delete/623c80b633db1fbbcedcfc63  DELETE


