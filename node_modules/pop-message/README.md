# Pop!
A simple npm package for displaying messages, confirming actions, and getting input from users. Best for small projects and basic validation.
## Examples
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
> [!IMPORTANT]
> Remember to wrap this in an async function
### Get user input
```Javascript
const name = await inputPop("What's your name?") //returns user input as string after Promise resolves
```
> [!IMPORTANT]
> Remember to wrap this in an async function
