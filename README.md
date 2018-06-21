# Name Letter Distribution Application

This is a React application that when given a username and password returns the distribution of letters of the username.

http://name-letter-distribution.surge.sh/

## How to run the application

We use webpack to build our application. When we develop, we can set webpack in watch mode:

1. `npm install`
2. `npm run start`

## Notes

Throughout my code I've sprinkled `FIXME`s or `TODO`s, which makes it easy for me to maintain development speed without forgetting about problems. I can also parse my code and output a list of outstanding issues. Of course, this is no substitute for Github issues or JIRA but it works while the project and technical debt are still small.

### State Management

I use Redux for state management. There are two pieces of information that we're storing in the Redux store: is a user is logged in or not, and the username/password of the user (the `input` fields are controlled components).

The `LetterDistribution` component uses the Redux application state, but also maintains its own state, which it uses to display/hide a loading spinner as we wait for a mock HTTP call. No other component should care about the spinner state, so we don't need to abstract it into our Redux store. (Plus I also wanted to demonstrate that I knew how to manage a component's internal state.)

### Design Systems

I use Sass to organize my CSS code, using a BEM-y naming convention. This code is kept in `src/styles`, and is injected into our javascript file at build time. The entry file is `main.scss`, which imports various variables from `common/` before using them elsewhere. `ui/` contains CSS for things such as the loading icon and the base button component. I also have a file called `_unorganized.scss`, which contains CSS that I haven't properly split out into files yet.

### Testing

I use Jest to test but I only have unit tests for one function at the moment. Eventually I would also want to test more fully, including functions that manipulate the DOM. 

You can run the test suite via `yarn test`.

### Improvements

There are a ton of things I'd like to implement (apart from completing the functionality of the site and clearing any technical debt):

* Code split to decrease the javascript bundle size
* Build the CSS into its own file, instead of piggybacking off of the javascript