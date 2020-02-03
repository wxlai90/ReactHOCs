# ReactHOCs

React HOC (Higher-Order Components)

Random HOCs that are fully functional, added when I get an idea.

## withData HOC

### Usage
```js
const mapDataToProps = {
    data: "https://jsonplaceholder.typicode.com/users"
}

export default withData(mapDataToProps)(SomeComponent)
```

Props|Value
-----|-----
isLoading|For displaying loading message while fetching is in progress
response|Response from api endpoint, only the response body at this point
error|Error message, if any

### Destructuring from data props
```js
const SomeComponent = ({ data: { isLoading, response, error }}) => {
    ...
}
```

---
