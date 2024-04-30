# Pop!
A simple script for displaying messages, confirming actions, and getting input from users.

## Example usage
Live example: https://alex-vdboogaard.github.io/pop/example.html
### Simple popups
```JavaScript 
simplePop("success", "Welcome new user!") //can be closed by the user
```
### Confirm actions
```JavaScript
const bool = confirmPop("Are you sure you want to delete this?") //returns true or false
```
### Get user input
```Javascript
const name = inputPop("What's your name?") //returns user input as string
```
