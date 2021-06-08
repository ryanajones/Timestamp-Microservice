# Timestamp Microservice

A timestamping microservice capable of returning a timestamp in JSON format. Given the user enters a ISO-8601 compliant date (e.g. "2016-11-20") in the URL, returned will be a JSON object with both a Unix and UTC timestamp to view. Node and Express are used to implement a RESTful API for HTTP request handling. Within the route handler function, the given date is parsed into separate Unix and UTC variables with their repective formats and return to the front-end.  

## Technologies Used

HTML CSS JavaScript NodeJS ExpressJS

## Repl Link

https://repl.it/@ryanajones/Timestamp-Microservice#README.md

## Screenshot

![alt text](https://i.imgur.com/f4kpcWg.png)
