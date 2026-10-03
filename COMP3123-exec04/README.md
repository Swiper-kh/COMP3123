# COMP3123 - Exercise 04 (Express JS)

## Run
```
npm install
npm run dev     # nodemon
npm start       # node
```
Server: http://localhost:3000

## Endpoints
| Method | URL | Result |
|---|---|---|
| GET | /hello | `Hello Express JS` (plain text) |
| GET | /user?firstname=John&lastname=Doe | `{"firstname":"John","lastname":"Doe"}` (defaults: Pritesh Patel) |
| POST | /user/John/Doe | `{"firstname":"John","lastname":"Doe"}` |
| POST | /users (JSON array body) | returns the array of users |
| GET | /instruction.html | static file from `public/` |
