# Name Letter Distribution Application

This is a React application that when given a username and password returns the distribution of letters of the username.

## How to run the application

We use webpack to build our application. When we develop, we can set webpack in watch mode:

1. `npm install`
2. `npm run start`

## Notes

Throughout my code I've included `FIXME`s or `TODO`s, which are highlighted in my editor, which makes it easy for me to maintain development speed. I can also parse my code and output a list of outstanding issues. Of course, this is no substitute for Github issues or JIRA, but it works while the project and technical debt are still small.

### State Management

I use Redux for state management. There are two pieces of information that we're storing in the Redux store: is a user is logged in or not, and the username/password of the user (the `input` fields are controlled components).

The `LetterDistribution` component uses the Redux application state, but also maintains its own state, which is uses to display/hide a loading spinner as we wait for a mock HTTP call. No other component should care about whether the spinner has finished loading, so we don't need to abstract it into our Redux store. (Plus I also wanted to demonstrate that I knew how to manage a component's internal state.)

### Design Systems

I use Sass to organize my CSS code, using a BEM-y naming convention. This code is kept in `src/styles`, and is injected into our javascript file at build time. The entry file is `main.scss`, which imports various variables from `common/` before using them elsewhere. `ui/` contains CSS for things such as the loading icon and the base button component. I also have a file called `_shame.scss`, which contains CSS that I haven't properly organized yet.

### Testing

I use Jest to test, but I only have unit tests for one function at the moment. For a more important application I would also want to test more fully, including function that manipulate the DOM. You can run the test suite via `yarn test`.