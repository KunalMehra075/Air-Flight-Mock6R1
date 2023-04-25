# Welcome to Air Ticket Booking Backend

This is a backend-system for user to simulate Air ticket booking system.

| Mehtod    | Endpoint         | Status Code | What it Performs                                                                            |
| --------- | ---------------- | ----------- | ------------------------------------------------------------------------------------------- |
| GET       | /api             | 200         | This it the base endpoint.                                                                  |
| POST      | /api/register    | 201         | This endpoint allows users to register.                                                     |
| POST      | /api/login       | 201         | This endpoint allows users to login.                                                        |
| GET       | /api/flights     | 200         | This endpoint returns a list of all available flights.                                      |
| GET       | /api/flights/:id | 200         | This endpoint returns the details of a specific flight identified by its ID.                |
| POST      | /api/flights     | 200         | This endpoint allows users to add new flights to the system. 201                            |
| PUT/PATCH | /api/flights/:id | 204         | This endpoint allows users to update the details of a specific flight identified by its ID. |
| DELETE    | /api/flights/:id | 204         | This endpoint allows users to delete a specific flight identified by its ID. 202            |
| GET       | /api/booking     | 201         | This endpoint allows the user access all the flights                                        |
| POST      | /api/booking     | 201         | This endpoint allows the user to book flights.                                              |
| GET       | /api/dashboard   | 200         | This endpoint returns the list all the bookings so far with the user and flight details.    |
