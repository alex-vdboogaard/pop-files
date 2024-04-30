# Pop!
A simple script for displaying messages, confirming actions, and getting input from users.

## Example usage
Live example: https://alex-vdboogaard.github.io/pop/example.html
### Simple popups
```JavaScript 
simplePop("success", "Welcome new user!") //success message

simplePop("error", "Something went wrong") //error message
```
### Confirm actions
```JavaScript
const bool = await confirmPop("Are you sure you want to delete this?") //returns true or false after Promise resolves
```
### Get user input
```Javascript
const name = await inputPop("What's your name?") //returns user input as string after Promise resolves
```
