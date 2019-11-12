# bpdts-test-app

### A solution to the following Problem
Using the language of your choice please build your own API which calls the API at https://bpdts-test-app.herokuapp.com/, and returns  people who are listed as either living in London, or whose current coordinates are within 50 miles of London.

## Dependencies
- NodeJS
- Express
- Axios
- Mocha
- Chai
- Chai-Http
- Lodash
- Geopoint

### Run App
```js
node src/index.js
```

### Query API
```bash
curl -X GET "http://localhost:3000/v1/users/london" -H "accept: application/json"
```

### Run Tests
```js
npm test
```