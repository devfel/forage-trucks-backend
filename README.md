# Backend Routes and Functionalities:

## Reservations
- [DONE] Route to list availabe vehicles to create reservations {PAGE 1}
    - TODO: filter by specific date, period (morning, afternoon, night), and availability.
- [DONE] Route to create a Reservation.

- [ToDo] Route to return the total of vehicles already Reserved.
- [DONE] Route to list all the vehicles reservations. (LendID, Date, VehicleID, PersonID) {PAGE 2}

## Users
- [ToDo] Save in localhost users name.

## Vehicle
- [DONE] Route to create a new Vehicle.


## ----------- NOT INCLIDED -----------
## Vehicle
- [F] Route to delete a Vehicle
- [F] Route to update a Vehicle
- [F] Route to list all vehicles

## Users
- [F] Route to create a new User
- [F] Route to Authenticate User
- [F] Route to delete a User
- [F] Route to update a User
- [F] Route to list all Users

## ISSUES
- ./src/database/migrations/01_create_reservations.ts - line .defaultTo(knex.raw('CURRENT_TIMESTAMP')) is setting a timestamp 5 hours later than what is the users real time due to Eastern Time Zone being for Florida state being GMT-5. 

// Aula 1: https://www.youtube.com/watch?v=ptcJSCuOa3Q (Finalizado)
// Aula 2: https://www.youtube.com/watch?v=xK8d5tLptHY (Finalizado)
// Aula 3: https://www.youtube.com/watch?v=Vbc1g7VD9oA (Finalizado)
// Aula 4: https://www.youtube.com/watch?v=I1qiKIjW_p0
// Aula 5: https://www.youtube.com/watch?v=LlWCSX9paW4