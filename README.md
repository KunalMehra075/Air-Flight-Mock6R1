# Welcome to Air Ticket Booking Backend

This is a backend-system for user to simulate Air ticket booking system.

# Features :-

- Users can Register
- Users can Login with Authentication
- Users can select flights make a booking for a flight
- Users can view All Flights, All Bookings,etc (Only if Authorized)

| Mehtod    | Endpoint         | Status Code | What it Performs                                                                            |
| --------- | ---------------- | ----------- | ------------------------------------------------------------------------------------------- |
| GET       | /api             | 200         | This it the base endpoint.                                                                  |
| POST      | /api/register    | 201         | This endpoint allows users to register.                                                     |
| POST      | /api/login       | 201         | This endpoint allows users to login.                                                        |
| GET       | /api/flights     | 200         | This endpoint returns a list of all available flights.                                      |
| POST      | /api/flights     | 200         | This endpoint allows users to add new flights to the system.                                |
| GET       | /api/flights/:id | 200         | This endpoint returns the details of a specific flight identified by its ID.                |
| PUT/PATCH | /api/flights/:id | 204         | This endpoint allows users to update the details of a specific flight identified by its ID. |
| DELETE    | /api/flights/:id | 204         | This endpoint allows users to delete a specific flight identified by its ID. 202            |
| GET       | /api/booking     | 201         | This endpoint allows the user access all the flights                                        |
| POST      | /api/booking     | 201         | This endpoint allows the user to book flights.                                              |
| GET       | /api/dashboard   | 200         | This endpoint returns the list all the bookings so far with the user and flight details.    |

## POST /api/register

- Register Endpoint for users
- It requires 3 fields in request.body- name,email,passwored

```
{
  "name":"Kunal Mehra",
  "email":"kunalmehra240304@gmail.com",
  "password":"kunal143"
}
```

- It returns a json object - which gives the message (If Successful) : Signup Successful

---

## POST /api/login

- Login Endpoint for users
- It requires 2 fields in request.body- email,passwored

```
{
  "email":"kunalmehra240304@gmail.com",
  "password":"kunal143"
}
```

- It returns a json object (If Successful) { Message:Login Successful,token:token }
- This token is further used for Authentication Purposes

---

## POST /api/flights

- This endpoint allows users to add new flights to the system.
- It requires 8 fields in request.body which contains all the details of the flight

```
// Sample
{
  "airline": "Sahara",
  "flightNo": "AX101",
  "departure": "Delhi",
  "arrival": "New York",
  "departureTime": "2023-04-25T07:55:32.039Z",
  "arrivalTime": "2023-04-22T07:55:32.039Z",
  "seats": 10000,
  "price": 2700
}

```

- It returns a json object (If Successful) { Message: "Succesfully Posted New Flight", NewFlight };

---

## POST /api/booking

- This endpoint allows users to book for flights.
- It requires only 2 fields in request.body which contains all the IDs (ObjectIds) of User & Flight

```
// Sample
{
  "user":"64478cc156b515ed52fba39b",
  "flight":"64478c153b81736b01269094"
}

```

---

# GET /api/flights/:id

- Its a get route which requests the ObjectID of flight in req.params object
- It returs the One Flight with this mongodb object id

---

# DELETE - /api/flights/:id

- Its a get route which requests the ObjectID of flight in req.params object
- It returns the One Flight which got Deleted with this mongodb object id

---

# PATCH/PUT - /api/flights/:id

- These routes requests the ObjectID of flight in req.params object
- They also require the Payload object,(the changes to be made) in req.body
- It returns the One Flight which got Updated with this mongodb object id

---

# Thankyou for visiting
